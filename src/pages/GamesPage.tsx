import { useState } from 'react';
import TicTacToe from '../components/demos/TicTacToe';
import GameHub from '../components/demos/GameHub';

type ActiveGame = 'tictactoe' | 'quiz' | 'chess' | 'pong' | null;

const GAMES: { id: ActiveGame; icon: string; title: string; desc: string; status: string; color: string }[] = [
  { id: 'tictactoe', icon: '⭕', title: 'Tic-Tac-Toe', desc: 'Klasična igra X i O sa AI protivnikom', status: 'live', color: '#7c3aed' },
  { id: 'quiz', icon: '🧠', title: 'Tehnološki Kviz', desc: '5 pitanja o tehnologiji, kriptu i AI', status: 'live', color: '#06b6d4' },
  { id: 'chess', icon: '♟️', title: 'Chess', desc: 'Online šah sa multiplayer podrškom', status: 'coming-soon', color: '#f59e0b' },
  { id: 'pong', icon: '🏓', title: 'Multiplayer Pong', desc: 'Klasični Pong za 2 igrača', status: 'coming-soon', color: '#10b981' },
];

export default function GamesPage() {
  const [active, setActive] = useState<ActiveGame>(null);

  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              fontWeight: 800,
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            🎮 Igrice Hub
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            Igraj online igrice direktno u pretraživaču — solo ili sa prijateljima
          </p>
        </div>

        {/* Game selector */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {GAMES.map((g, i) => (
            <button
              key={i}
              onClick={() => g.status === 'live' && setActive(g.id)}
              style={{
                padding: '24px',
                background: active === g.id ? `${g.color}22` : 'rgba(255,255,255,0.04)',
                border: active === g.id ? `2px solid ${g.color}66` : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                cursor: g.status === 'live' ? 'pointer' : 'not-allowed',
                textAlign: 'left',
                transition: 'all 0.2s',
                opacity: g.status === 'coming-soon' ? 0.6 : 1,
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{g.icon}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>{g.title}</h3>
                {g.status === 'coming-soon' && (
                  <span style={{ fontSize: '0.65rem', background: 'rgba(245,158,11,0.2)', color: '#f59e0b', padding: '2px 7px', borderRadius: '10px', fontWeight: 600 }}>
                    Uskoro
                  </span>
                )}
                {g.status === 'live' && (
                  <span style={{ fontSize: '0.65rem', background: 'rgba(16,185,129,0.2)', color: '#10b981', padding: '2px 7px', borderRadius: '10px', fontWeight: 600 }}>
                    Live
                  </span>
                )}
              </div>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{g.desc}</p>
            </button>
          ))}
        </div>

        {/* Active game */}
        {active === 'tictactoe' && (
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '20px',
              padding: '40px 24px',
            }}
          >
            <h2 style={{ textAlign: 'center', color: '#f1f5f9', fontWeight: 700, marginBottom: '32px', fontSize: '1.4rem' }}>
              ⭕ Tic-Tac-Toe
            </h2>
            <TicTacToe />
          </div>
        )}

        {active === 'quiz' && (
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(6,182,212,0.3)',
              borderRadius: '20px',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <GameHub />
          </div>
        )}

        {!active && (
          <div
            style={{
              textAlign: 'center',
              padding: '40px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.1)',
              borderRadius: '16px',
              color: '#64748b',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>👆</div>
            <p>Izaberi igru iznad da počneš da igraš</p>
          </div>
        )}
      </div>
    </div>
  );
}
