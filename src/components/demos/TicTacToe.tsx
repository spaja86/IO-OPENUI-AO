import { useState, useCallback, useEffect, useRef } from 'react';

type Player = 'X' | 'O' | null;

function calculateWinner(squares: Player[]): Player {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function minimax(squares: Player[], isMaximizing: boolean): number {
  const winner = calculateWinner(squares);
  if (winner === 'X') return -10;
  if (winner === 'O') return 10;
  if (!squares.includes(null)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    squares.forEach((sq, i) => {
      if (!sq) {
        squares[i] = 'O';
        best = Math.max(best, minimax(squares, false));
        squares[i] = null;
      }
    });
    return best;
  } else {
    let best = Infinity;
    squares.forEach((sq, i) => {
      if (!sq) {
        squares[i] = 'X';
        best = Math.min(best, minimax(squares, true));
        squares[i] = null;
      }
    });
    return best;
  }
}

function getBestMove(squares: Player[]): number {
  let bestVal = -Infinity;
  let bestMove = -1;
  squares.forEach((sq, i) => {
    if (!sq) {
      squares[i] = 'O';
      const moveVal = minimax(squares, false);
      squares[i] = null;
      if (moveVal > bestVal) {
        bestVal = moveVal;
        bestMove = i;
      }
    }
  });
  return bestMove;
}

const AUTOFINISH_DELAY = 3;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [vsAI, setVsAI] = useState(true);
  const [autoFinish, setAutoFinish] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const winner = calculateWinner(board);
  const isDraw = !winner && !board.includes(null);

  const handleClick = useCallback(
    (i: number) => {
      if (board[i] || winner || isDraw) return;
      if (!xIsNext && vsAI) return;

      const newBoard = [...board];
      newBoard[i] = xIsNext ? 'X' : 'O';
      setBoard(newBoard);
      setXIsNext(!xIsNext);

      const w = calculateWinner(newBoard);
      if (w) {
        setScores(s => ({ ...s, [w]: s[w as 'X' | 'O'] + 1 }));
        return;
      }
      if (!newBoard.includes(null)) {
        setScores(s => ({ ...s, draws: s.draws + 1 }));
        return;
      }

      // AI move
      if (vsAI && xIsNext) {
        setTimeout(() => {
          setBoard(prev => {
            const b2 = [...prev];
            if (calculateWinner(b2) || !b2.includes(null)) return b2;
            const move = getBestMove([...b2]);
            if (move !== -1) b2[move] = 'O';
            const w2 = calculateWinner(b2);
            if (w2) setScores(s => ({ ...s, [w2]: s[w2 as 'X' | 'O'] + 1 }));
            else if (!b2.includes(null)) setScores(s => ({ ...s, draws: s.draws + 1 }));
            return b2;
          });
          setXIsNext(true);
        }, 400);
      }
    },
    [board, winner, isDraw, xIsNext, vsAI]
  );

  const reset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setCountdown(null);
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  };

  // Autofinish: start countdown when game ends
  useEffect(() => {
    if (!autoFinish || (!winner && !isDraw)) {
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
          // Reset the board for a new game
          setBoard(Array(9).fill(null));
          setXIsNext(true);
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
  }, [autoFinish, winner, isDraw]);

  const cellColors = (cell: Player) => {
    if (cell === 'X') return '#7c3aed';
    if (cell === 'O') return '#06b6d4';
    return 'transparent';
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Mode toggle */}
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {[true, false].map(ai => (
          <button
            key={String(ai)}
            onClick={() => { setVsAI(ai); reset(); }}
            style={{
              padding: '6px 16px',
              borderRadius: '8px',
              border: vsAI === ai ? '1px solid #7c3aed' : '1px solid rgba(255,255,255,0.1)',
              background: vsAI === ai ? 'rgba(124,58,237,0.2)' : 'transparent',
              color: vsAI === ai ? '#7c3aed' : '#94a3b8',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            {ai ? '🤖 vs AI' : '👤 vs Igrač'}
          </button>
        ))}
        <button
          onClick={() => setAutoFinish(a => !a)}
          style={{
            padding: '6px 16px',
            borderRadius: '8px',
            border: autoFinish ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
            background: autoFinish ? 'rgba(16,185,129,0.2)' : 'transparent',
            color: autoFinish ? '#10b981' : '#94a3b8',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          ⚡ Autofinish {autoFinish ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Score */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {[
          { label: 'X (Ti)', value: scores.X, color: '#7c3aed' },
          { label: 'Remija', value: scores.draws, color: '#64748b' },
          { label: vsAI ? 'O (AI)' : 'O (P2)', value: scores.O, color: '#06b6d4' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Status */}
      <div
        style={{
          marginBottom: '16px',
          padding: '10px 20px',
          background: winner ? 'rgba(16,185,129,0.15)' : isDraw ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.05)',
          border: winner ? '1px solid rgba(16,185,129,0.3)' : isDraw ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.08)',
          borderRadius: '8px',
          color: winner ? '#10b981' : isDraw ? '#f59e0b' : '#94a3b8',
          fontSize: '0.9rem',
          fontWeight: 600,
          display: 'inline-block',
        }}
      >
        {winner ? `🎉 ${winner === 'X' ? 'Ti' : vsAI ? 'AI' : 'Igrač 2'} pobeduje!` : isDraw ? '🤝 Nerešeno!' : `Na redu: ${xIsNext ? 'X (Ti)' : vsAI ? 'O (AI)' : 'O (P2)'}`}
        {autoFinish && countdown !== null && (
          <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '4px', color: '#f59e0b' }}>
            Nova igra za {countdown}s...
          </span>
        )}
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 80px)',
          gap: '8px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: '80px',
              height: '80px',
              background: cell ? `${cellColors(cell)}22` : 'rgba(255,255,255,0.05)',
              border: cell ? `2px solid ${cellColors(cell)}66` : '2px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              fontSize: '2rem',
              fontWeight: 700,
              color: cell === 'X' ? '#7c3aed' : '#06b6d4',
              cursor: cell || winner || isDraw ? 'default' : 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {cell || ''}
          </button>
        ))}
      </div>

      {/* Reset */}
      <button
        onClick={reset}
        style={{
          padding: '10px 24px',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          border: 'none',
          borderRadius: '8px',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.9rem',
        }}
      >
        🔄 Nova igra
      </button>
    </div>
  );
}
