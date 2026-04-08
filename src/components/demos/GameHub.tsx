import { useState, useEffect, useRef } from 'react';
import { QUIZ_QUESTIONS } from '../../constants';

type Phase = 'start' | 'playing' | 'finished';

const AUTOFINISH_DELAY = 2;

export default function GameHub() {
  const [phase, setPhase] = useState<Phase>('start');
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [autoFinish, setAutoFinish] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef = useRef(current);
  currentRef.current = current;

  useEffect(() => {
    if (phase !== 'playing' || selected !== null) return;
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, phase, selected]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === QUIZ_QUESTIONS[current].correctIndex) {
      setScore(s => s + Math.max(1, timeLeft));
    }
  };

  const advanceToNext = () => {
    setSelected(null);
    setTimeLeft(30);
    if (currentRef.current + 1 >= QUIZ_QUESTIONS.length) {
      setPhase('finished');
    } else {
      setCurrent(c => c + 1);
    }
  };

  const handleNext = () => {
    setCountdown(null);
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    advanceToNext();
  };

  // Autofinish: auto-advance after answering
  useEffect(() => {
    if (!autoFinish || phase !== 'playing' || selected === null) {
      setCountdown(null);
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      return;
    }

    setCountdown(AUTOFINISH_DELAY);
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 1) {
          if (countdownRef.current) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
          }
          advanceToNext();
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    };
  }, [autoFinish, phase, selected]);

  const restart = () => {
    setPhase('start');
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setTimeLeft(30);
    setCountdown(null);
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  };

  const q = QUIZ_QUESTIONS[current];
  const totalPossible = QUIZ_QUESTIONS.length * 30;

  if (phase === 'start') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🧠</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px', color: '#f1f5f9' }}>
          Tehnološki Kviz
        </h3>
        <p style={{ color: '#94a3b8', marginBottom: '8px' }}>
          {QUIZ_QUESTIONS.length} pitanja o tehnologiji, kriptu i AI
        </p>
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '28px' }}>
          Svako pitanje: 30 sekundi • Brži odgovor = više poena
        </p>
        <button
          onClick={() => setPhase('playing')}
          style={{
            padding: '12px 28px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            border: 'none',
            borderRadius: '10px',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          ▶ Počni Kviz
        </button>
        <div style={{ marginTop: '16px' }}>
          <button
            onClick={() => setAutoFinish(a => !a)}
            style={{
              padding: '8px 20px',
              borderRadius: '8px',
              border: autoFinish ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
              background: autoFinish ? 'rgba(16,185,129,0.2)' : 'transparent',
              color: autoFinish ? '#10b981' : '#94a3b8',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            ⚡ Autofinish {autoFinish ? 'ON' : 'OFF'}
          </button>
          {autoFinish && (
            <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '8px' }}>
              Automatski prelazi na sledeće pitanje nakon odgovora
            </p>
          )}
        </div>
      </div>
    );
  }

  if (phase === 'finished') {
    const pct = Math.round((score / totalPossible) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚';
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{emoji}</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px', color: '#f1f5f9' }}>
          Kviz završen!
        </h3>
        <div
          style={{
            display: 'inline-block',
            padding: '20px 40px',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '16px',
            marginBottom: '20px',
          }}
        >
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#7c3aed' }}>{score}</div>
          <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>od max {totalPossible} poena</div>
          <div style={{ color: '#06b6d4', fontSize: '1.1rem', fontWeight: 600, marginTop: '8px' }}>{pct}%</div>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '0.9rem' }}>
          {pct >= 80 ? 'Odlično! Ti si pravi tehnološki guru! 🎉' : pct >= 50 ? 'Dobro! Još malo vežbe i bićeš ekspert!' : 'Ne brini, svaki početnik je bio početnik!'}
        </p>
        <button
          onClick={restart}
          style={{
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          🔄 Igraj ponovo
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      {/* Progress */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
          Pitanje {current + 1} / {QUIZ_QUESTIONS.length}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#f59e0b', fontWeight: 700, fontSize: '0.9rem' }}>⏱ {timeLeft}s</span>
          <span style={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.9rem' }}>Poeni: {score}</span>
        </div>
      </div>

      {/* Timer bar */}
      <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginBottom: '24px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${(timeLeft / 30) * 100}%`,
            background: timeLeft > 10 ? '#10b981' : timeLeft > 5 ? '#f59e0b' : '#ef4444',
            transition: 'width 1s linear, background 0.3s',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Question */}
      <h3 style={{ color: '#f1f5f9', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px', lineHeight: 1.5 }}>
        {q.question}
      </h3>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {q.options.map((opt, idx) => {
          let bg = 'rgba(255,255,255,0.05)';
          let border = '1px solid rgba(255,255,255,0.1)';
          let color = '#e2e8f0';
          if (selected !== null) {
            if (idx === q.correctIndex) {
              bg = 'rgba(16,185,129,0.15)';
              border = '1px solid rgba(16,185,129,0.5)';
              color = '#10b981';
            } else if (idx === selected) {
              bg = 'rgba(239,68,68,0.15)';
              border = '1px solid rgba(239,68,68,0.5)';
              color = '#ef4444';
            }
          }
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              style={{
                padding: '12px 16px',
                background: bg,
                border,
                borderRadius: '10px',
                color,
                cursor: selected !== null ? 'default' : 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              {String.fromCharCode(65 + idx)}. {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {autoFinish && countdown !== null ? (
            <span style={{ color: '#f59e0b', fontWeight: 600, fontSize: '0.9rem' }}>
              ⚡ Sledeće pitanje za {countdown}s...
            </span>
          ) : (
            <button
              onClick={handleNext}
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              {current + 1 < QUIZ_QUESTIONS.length ? 'Sledeće pitanje →' : 'Vidi rezultat'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
