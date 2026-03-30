import { useEffect, useRef, useState, useCallback } from 'react';

const W = 800, H = 500;
const PAD_W = 12, PAD_H = 80, PAD_SPEED = 5, BALL_R = 8, BALL_SPEED_INIT = 4;

interface State {
  ball: { x: number; y: number; vx: number; vy: number };
  p1: number; p2: number;
  score: [number, number];
  paused: boolean;
  running: boolean;
}

function initState(): State {
  return {
    ball: { x: W / 2, y: H / 2, vx: BALL_SPEED_INIT * (Math.random() > 0.5 ? 1 : -1), vy: (Math.random() * 2 - 1) * 3 },
    p1: H / 2 - PAD_H / 2,
    p2: H / 2 - PAD_H / 2,
    score: [0, 0],
    paused: false,
    running: true,
  };
}

export default function Pong() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>(initState());
  const keysRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number>(0);
  const [score, setScore] = useState<[number, number]>([0, 0]);
  const [running, setRunning] = useState(true);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    const s = stateRef.current;
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0d0d1a';
    ctx.fillRect(0, 0, W, H);

    // Center line
    ctx.setLineDash([12, 10]);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
    ctx.setLineDash([]);

    // Paddles with glow
    const drawPad = (x: number, y: number, color: string) => {
      ctx.shadowColor = color;
      ctx.shadowBlur = 18;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(x, y, PAD_W, PAD_H, 6);
      ctx.fill();
      ctx.shadowBlur = 0;
    };
    drawPad(16, s.p1, '#7c3aed');
    drawPad(W - 16 - PAD_W, s.p2, '#06b6d4');

    // Ball
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(s.ball.x, s.ball.y, BALL_R, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Scores
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = 'bold 36px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(String(s.score[0]), W / 4, 48);
    ctx.fillText(String(s.score[1]), (W * 3) / 4, 48);

    if (s.paused) {
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#f1f5f9';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('⏸ Pauza — Space da nastaviš', W / 2, H / 2);
    }
  }, []);

  const tick = useCallback(() => {
    const s = stateRef.current;
    if (!s.running || s.paused) {
      draw(canvasRef.current!.getContext('2d')!);
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    const keys = keysRef.current;
    if (keys.has('w') || keys.has('W')) s.p1 = Math.max(0, s.p1 - PAD_SPEED);
    if (keys.has('s') || keys.has('S')) s.p1 = Math.min(H - PAD_H, s.p1 + PAD_SPEED);
    if (keys.has('ArrowUp')) s.p2 = Math.max(0, s.p2 - PAD_SPEED);
    if (keys.has('ArrowDown')) s.p2 = Math.min(H - PAD_H, s.p2 + PAD_SPEED);

    s.ball.x += s.ball.vx;
    s.ball.y += s.ball.vy;

    // Top/bottom bounce
    if (s.ball.y - BALL_R <= 0 || s.ball.y + BALL_R >= H) s.ball.vy *= -1;

    // Paddle collision p1
    if (s.ball.x - BALL_R <= 16 + PAD_W && s.ball.y >= s.p1 && s.ball.y <= s.p1 + PAD_H && s.ball.vx < 0) {
      s.ball.vx *= -1.05;
      s.ball.vy += ((s.ball.y - (s.p1 + PAD_H / 2)) / (PAD_H / 2)) * 2;
    }
    // Paddle collision p2
    if (s.ball.x + BALL_R >= W - 16 - PAD_W && s.ball.y >= s.p2 && s.ball.y <= s.p2 + PAD_H && s.ball.vx > 0) {
      s.ball.vx *= -1.05;
      s.ball.vy += ((s.ball.y - (s.p2 + PAD_H / 2)) / (PAD_H / 2)) * 2;
    }

    // Cap speed
    const spd = Math.sqrt(s.ball.vx ** 2 + s.ball.vy ** 2);
    if (spd > 14) { s.ball.vx = (s.ball.vx / spd) * 14; s.ball.vy = (s.ball.vy / spd) * 14; }

    // Score
    if (s.ball.x < 0) {
      s.score[1]++;
      setScore([s.score[0], s.score[1]]);
      Object.assign(s, { ...initState(), score: s.score });
    }
    if (s.ball.x > W) {
      s.score[0]++;
      setScore([s.score[0], s.score[1]]);
      Object.assign(s, { ...initState(), score: s.score });
    }

    draw(canvasRef.current!.getContext('2d')!);
    rafRef.current = requestAnimationFrame(tick);
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = W;
    canvas.height = H;

    const onKey = (e: KeyboardEvent, down: boolean) => {
      if (['w','W','s','S','ArrowUp','ArrowDown'].includes(e.key)) e.preventDefault();
      if (e.key === ' ') { stateRef.current.paused = !stateRef.current.paused; return; }
      down ? keysRef.current.add(e.key) : keysRef.current.delete(e.key);
    };
    window.addEventListener('keydown', e => onKey(e, true));
    window.addEventListener('keyup', e => onKey(e, false));
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('keydown', e => onKey(e, true));
      window.removeEventListener('keyup', e => onKey(e, false));
    };
  }, [tick]);

  const restart = () => {
    stateRef.current = initState();
    setScore([0, 0]);
    setRunning(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.9rem' }}>🟣 Igrač 1 — W/S</span>
        <span style={{ color: '#f1f5f9', fontWeight: 800, fontSize: '1.2rem' }}>{score[0]} : {score[1]}</span>
        <span style={{ color: '#06b6d4', fontWeight: 700, fontSize: '0.9rem' }}>Igrač 2 — ↑/↓ 🔵</span>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: `${W}px` }}>
        <canvas
          ref={canvasRef}
          style={{ width: '100%', border: '2px solid rgba(124,58,237,0.4)', borderRadius: '12px', display: 'block' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => { stateRef.current.paused = !stateRef.current.paused; }}
          style={{ padding: '8px 18px', background: 'rgba(124,58,237,0.2)', border: '1px solid #7c3aed', borderRadius: '8px', color: '#7c3aed', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
        >
          ⏸ Pauza (Space)
        </button>
        <button
          onClick={restart}
          style={{ padding: '8px 18px', background: 'rgba(6,182,212,0.15)', border: '1px solid #06b6d4', borderRadius: '8px', color: '#06b6d4', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
        >
          🔄 Restart
        </button>
      </div>

      <p style={{ color: '#475569', fontSize: '0.78rem', textAlign: 'center' }}>
        Igrač 1: W (gore) / S (dole) &nbsp;|&nbsp; Igrač 2: ↑ / ↓ &nbsp;|&nbsp; Space: pauza
      </p>
    </div>
  );
}
