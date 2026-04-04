import { useState, useEffect } from 'react';

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
}

const STORAGE_KEY = 'io-leaderboard';

function loadEntries(game: string): LeaderboardEntry[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY}-${game}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveScore(game: string, name: string, score: number) {
  const entries = loadEntries(game);
  entries.push({ name, score, date: new Date().toLocaleDateString('sr-RS') });
  entries.sort((a, b) => b.score - a.score);
  localStorage.setItem(`${STORAGE_KEY}-${game}`, JSON.stringify(entries.slice(0, 10)));
}

interface LeaderboardProps {
  game: string;
  title?: string;
}

const MEDALS = ['🥇', '🥈', '🥉'];

export default function Leaderboard({ game, title = 'Rang Lista' }: LeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const data = loadEntries(game);
    setEntries(data);
    data.forEach((_, i) => {
      setTimeout(() => setVisible(prev => [...prev, i]), i * 80);
    });
  }, [game]);

  if (entries.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '24px', color: '#475569', fontSize: '0.9rem' }}>
        <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏆</div>
        <p>{title} — Još nema rezultata. Igraj i budi prvi!</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '420px', width: '100%' }}>
      <h3 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '16px', textAlign: 'center', fontSize: '1rem' }}>
        🏆 {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {entries.map((e, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 14px',
              background: i === 0 ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.04)',
              border: i === 0 ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px',
              opacity: visible.includes(i) ? 1 : 0,
              transform: visible.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: '1.1rem', minWidth: '28px', textAlign: 'center' }}>
              {MEDALS[i] || `${i + 1}.`}
            </span>
            <span style={{ flex: 1, color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem' }}>{e.name}</span>
            <span style={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.9rem' }}>{e.score}</span>
            <span style={{ color: '#475569', fontSize: '0.75rem' }}>{e.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
