import { useState, useCallback } from 'react';

type Piece = { type: string; color: 'w' | 'b' };
type Board = (Piece | null)[][];
type Pos = [number, number];

function initBoard(): Board {
  const b: Board = Array(8).fill(null).map(() => Array(8).fill(null));
  const order = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
  order.forEach((t, c) => {
    b[0][c] = { type: t, color: 'b' };
    b[7][c] = { type: t, color: 'w' };
  });
  for (let c = 0; c < 8; c++) {
    b[1][c] = { type: 'p', color: 'b' };
    b[6][c] = { type: 'p', color: 'w' };
  }
  return b;
}

const UNICODE: Record<string, Record<'w' | 'b', string>> = {
  k: { w: '♔', b: '♚' }, q: { w: '♕', b: '♛' },
  r: { w: '♖', b: '♜' }, b: { w: '♗', b: '♝' },
  n: { w: '♘', b: '♞' }, p: { w: '♙', b: '♟' },
};

function getLegalMoves(board: Board, row: number, col: number): Pos[] {
  const piece = board[row][col];
  if (!piece) return [];
  const moves: Pos[] = [];
  const inBounds = (r: number, c: number) => r >= 0 && r < 8 && c >= 0 && c < 8;
  const isEnemy = (r: number, c: number) => inBounds(r, c) && board[r][c] !== null && board[r][c]!.color !== piece.color;
  const isEmpty = (r: number, c: number) => inBounds(r, c) && board[r][c] === null;
  const canLand = (r: number, c: number) => isEmpty(r, c) || isEnemy(r, c);

  const slide = (dr: number, dc: number) => {
    let r = row + dr, c = col + dc;
    while (inBounds(r, c)) {
      if (board[r][c] === null) { moves.push([r, c]); }
      else { if (isEnemy(r, c)) moves.push([r, c]); break; }
      r += dr; c += dc;
    }
  };

  if (piece.type === 'p') {
    const dir = piece.color === 'w' ? -1 : 1;
    const startRow = piece.color === 'w' ? 6 : 1;
    if (isEmpty(row + dir, col)) { moves.push([row + dir, col]); if (row === startRow && isEmpty(row + 2 * dir, col)) moves.push([row + 2 * dir, col]); }
    if (isEnemy(row + dir, col - 1)) moves.push([row + dir, col - 1]);
    if (isEnemy(row + dir, col + 1)) moves.push([row + dir, col + 1]);
  } else if (piece.type === 'n') {
    [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr, dc]) => { if (canLand(row+dr, col+dc)) moves.push([row+dr, col+dc]); });
  } else if (piece.type === 'b') {
    [[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([dr, dc]) => slide(dr, dc));
  } else if (piece.type === 'r') {
    [[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr, dc]) => slide(dr, dc));
  } else if (piece.type === 'q') {
    [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([dr, dc]) => slide(dr, dc));
  } else if (piece.type === 'k') {
    [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([dr, dc]) => { if (canLand(row+dr, col+dc)) moves.push([row+dr, col+dc]); });
  }
  return moves;
}

export default function Chess() {
  const [board, setBoard] = useState<Board>(initBoard);
  const [selected, setSelected] = useState<Pos | null>(null);
  const [legalMoves, setLegalMoves] = useState<Pos[]>([]);
  const [turn, setTurn] = useState<'w' | 'b'>('w');
  const [status, setStatus] = useState('Belom je red');

  const handleClick = useCallback((row: number, col: number) => {
    const piece = board[row][col];

    if (selected) {
      const isLegal = legalMoves.some(([r, c]) => r === row && c === col);
      if (isLegal) {
        const newBoard = board.map(r => [...r]);
        const captured = newBoard[row][col];
        newBoard[row][col] = newBoard[selected[0]][selected[1]];
        newBoard[selected[0]][selected[1]] = null;
        const nextTurn: 'w' | 'b' = turn === 'w' ? 'b' : 'w';
        let newStatus = `${nextTurn === 'w' ? 'Belom' : 'Crnom'} je red`;
        if (captured?.type === 'k') newStatus = `${turn === 'w' ? 'Beli' : 'Crni'} pobednik! 🎉`;
        setBoard(newBoard);
        setTurn(nextTurn);
        setStatus(newStatus);
        setSelected(null);
        setLegalMoves([]);
        return;
      }
      setSelected(null);
      setLegalMoves([]);
      if (piece && piece.color !== turn) return;
    }

    if (piece && piece.color === turn) {
      setSelected([row, col]);
      setLegalMoves(getLegalMoves(board, row, col));
    }
  }, [board, selected, legalMoves, turn]);

  const reset = () => {
    setBoard(initBoard());
    setSelected(null);
    setLegalMoves([]);
    setTurn('w');
    setStatus('Belom je red');
  };

  const isHighlighted = (r: number, c: number) => legalMoves.some(([lr, lc]) => lr === r && lc === c);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.95rem' }}>{status}</span>
        <span style={{ fontSize: '0.7rem', background: 'rgba(245,158,11,0.2)', color: '#f59e0b', padding: '3px 10px', borderRadius: '10px', fontWeight: 600 }}>🤖 AI — Coming Soon</span>
        <button onClick={reset} style={{ padding: '6px 14px', background: 'rgba(124,58,237,0.2)', border: '1px solid #7c3aed', borderRadius: '8px', color: '#7c3aed', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
          Restart
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          border: '2px solid rgba(124,58,237,0.5)',
          borderRadius: '8px',
          overflow: 'hidden',
          maxWidth: '480px',
          width: '100%',
          aspectRatio: '1',
        }}
      >
        {board.map((row, r) =>
          row.map((piece, c) => {
            const isLight = (r + c) % 2 === 0;
            const isSel = selected && selected[0] === r && selected[1] === c;
            const isHl = isHighlighted(r, c);
            return (
              <div
                key={`${r}-${c}`}
                onClick={() => handleClick(r, c)}
                style={{
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isSel ? 'rgba(124,58,237,0.5)' : isHl ? 'rgba(16,185,129,0.35)' : isLight ? 'rgba(255,255,255,0.08)' : 'rgba(13,13,26,0.9)',
                  cursor: 'pointer',
                  fontSize: 'clamp(16px, 4vw, 28px)',
                  userSelect: 'none',
                  transition: 'background 0.15s',
                  position: 'relative',
                }}
              >
                {isHl && !piece && (
                  <div style={{ width: '28%', height: '28%', borderRadius: '50%', background: 'rgba(16,185,129,0.6)' }} />
                )}
                {piece && <span title={`${piece.color === 'w' ? 'Beli' : 'Crni'} ${piece.type}`}>{UNICODE[piece.type][piece.color]}</span>}
              </div>
            );
          })
        )}
      </div>

      <p style={{ color: '#64748b', fontSize: '0.8rem', textAlign: 'center' }}>
        Kliknite figuru da vidite legalne poteze, zatim kliknite polje
      </p>
    </div>
  );
}
