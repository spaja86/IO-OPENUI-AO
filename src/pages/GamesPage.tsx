import React, { useState } from 'react';
import TicTacToe from '../components/demos/TicTacToe';
import GameHub from '../components/demos/GameHub';
import Chess from '../components/games/Chess';
import Pong from '../components/games/Pong';
import Leaderboard from '../components/games/Leaderboard';
import {
  adminControls,
  antiFraudRules,
  antiAbuseBountyRules,
  bountyMatrix,
  complianceRequirements,
  compensationRules,
  contractTierPolicies,
  gamesCatalog,
  ledgerEntries,
  legalTracks,
  lifecycleSteps,
  operationalControls,
  programSubsystems,
  proPlayerStatuses,
  rankFactors,
  recentBountyEvents,
  transactionHistory,
  walletSnapshot,
  weeklyRankSnapshots,
  weeklySettlements,
  workRules,
} from '../data/gamesEconomy';

type ActiveGame = 'tictactoe' | 'quiz' | 'chess' | 'pong';

const MINI_GAMES: { id: ActiveGame; icon: string; title: string; desc: string; color: string }[] = [
  { id: 'tictactoe', icon: '⭕', title: 'Tic-Tac-Toe', desc: 'Fun/Test duel bez realnog novca.', color: '#7c3aed' },
  { id: 'quiz', icon: '🧠', title: 'Tehnološki Kviz', desc: 'Znanje, brzina i lokalna rang lista.', color: '#06b6d4' },
  { id: 'chess', icon: '♟️', title: 'Chess', desc: 'Trening tabla i validacija poteza.', color: '#f59e0b' },
  { id: 'pong', icon: '🏓', title: 'Multiplayer Pong', desc: 'Arcade test režim za dva igrača.', color: '#10b981' },
];

const sectionCard: React.CSSProperties = {
  background: 'rgba(18, 35, 64, 0.7)',
  border: '1px solid rgba(0, 212, 255, 0.14)',
  borderRadius: '20px',
  padding: '24px',
  backdropFilter: 'blur(16px)',
};

function badgeStyle(color: string): React.CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    borderRadius: '999px',
    background: `${color}20`,
    border: `1px solid ${color}4d`,
    color,
    fontSize: '0.78rem',
    fontWeight: 700,
  };
}

function listStyle(color: string): React.CSSProperties {
  return {
    padding: '10px 14px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    color,
  };
}

function statusAccent(status: string) {
  switch (status) {
    case 'contracted':
      return '#10b981';
    case 'candidate':
      return '#06b6d4';
    case 'independent':
      return '#7c3aed';
    case 'suspended':
      return '#ef4444';
    case 'released':
      return '#f59e0b';
    default:
      return '#e2e8f0';
  }
}

function tierAccent(tier: string) {
  switch (tier) {
    case 'elite':
      return '#f59e0b';
    case 'premium':
      return '#7c3aed';
    case 'standard':
      return '#10b981';
    case 'development':
      return '#06b6d4';
    default:
      return '#94a3b8';
  }
}

export default function GamesPage() {
  const [selectedPlan, setSelectedPlan] = useState(gamesCatalog[0]);
  const [activeMiniGame, setActiveMiniGame] = useState<ActiveGame>('tictactoe');

  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <section
        style={{
          padding: '96px 0 72px',
          background: 'radial-gradient(circle at top, rgba(124,58,237,0.18), transparent 45%), linear-gradient(180deg, rgba(0,212,255,0.06) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ ...badgeStyle('#f59e0b'), margin: '0 auto 18px' }}>
              🎮 Games Economy · Real-money competitive gaming
            </div>
            <h1 className="section-title" style={{ marginBottom: '18px' }}>
              Professional <span className="gradient-text">Games Economy</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '820px' }}>
              Novi `/games` modul deli igranje na Fun/Test i Professional zonu, uvodi trajne licence,
              START kredite, Game Plan pravila, wallet/ledger tokove, PDF dokumentaciju i AI IQ World Bank
              kao finansijski operativni sloj.
            </p>
            <div
              style={{
                ...sectionCard,
                marginTop: '28px',
                border: '1px solid rgba(245,158,11,0.32)',
                background: 'rgba(245,158,11,0.08)',
                textAlign: 'left',
              }}
            >
              <div style={{ ...badgeStyle('#f59e0b'), marginBottom: '12px' }}>⚖️ Regulatory guardrails</div>
              <p style={{ color: 'var(--io-text)' }}>
                Professional zona je projektovana kao <strong>skill competition</strong> sa obaveznom proverom
                starosti, identiteta, KYC/AML pravila i audit nadzorom. Korisnici ispod 18 godina ostaju samo
                u Fun/Test režimu dok ne ispune sve uslove.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div style={{ ...sectionCard, borderColor: 'rgba(16,185,129,0.28)' }}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>🟢 Fun / Test zona</div>
              <h2 style={{ marginBottom: '10px', fontSize: '1.35rem' }}>Bez realnog novca</h2>
              <p style={{ color: 'var(--io-muted)', marginBottom: '18px' }}>
                Browser mini-igre ostaju dostupne svim korisnicima za trening, onboarding i proveru znanja.
              </p>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                <li style={listStyle('#e2e8f0')}>Trajna licenca nije obavezna</li>
                <li style={listStyle('#e2e8f0')}>START kredit = 0 RSD</li>
                <li style={listStyle('#e2e8f0')}>Lokalni leaderboard i trening scenariji</li>
              </ul>
            </div>

            <div style={{ ...sectionCard, borderColor: 'rgba(124,58,237,0.32)' }}>
              <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '16px' }}>🟣 Professional zona</div>
              <h2 style={{ marginBottom: '10px', fontSize: '1.35rem' }}>Real-money competitive mode</h2>
              <p style={{ color: 'var(--io-muted)', marginBottom: '18px' }}>
                Svaki naslov ima trajnu kupovinu, START kredit pri svakom novom meču, zaključan fond i verifikovane
                bonuse koji se isplaćuju tek uz pobedu.
              </p>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                <li style={listStyle('#e2e8f0')}>18+ · ID + age verification · KYC/AML</li>
                <li style={listStyle('#e2e8f0')}>Wallet rezervacija sredstava pre roster lock-a</li>
                <li style={listStyle('#e2e8f0')}>PDF račun/obračun + profesionalni email delivery</li>
                <li style={listStyle('#e2e8f0')}>Pro Player Contracts + Weekly Bounty Program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 className="section-title">Professional Program Model</h2>
            <p className="section-subtitle">Fun/Test ostaje odvojen, dok se novi ugovorni i bounty mehanizmi primenjuju samo u Professional zoni.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            {programSubsystems.map(system => (
              <div key={system.title} style={sectionCard}>
                <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '12px' }}>{system.scope}</div>
                <h3 style={{ marginBottom: '10px' }}>{system.title}</h3>
                <p style={{ color: 'var(--io-muted)' }}>{system.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {proPlayerStatuses.map(item => (
              <div key={item.status} style={{ ...sectionCard, borderColor: `${statusAccent(item.status)}55` }}>
                <div style={{ ...badgeStyle(statusAccent(item.status)), marginBottom: '12px' }}>{item.label}</div>
                <p style={{ color: 'var(--io-muted)' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 className="section-title">Games Catalog &amp; Pricing</h2>
            <p className="section-subtitle">Konfigurisani model po igri: licenca, START, fond, bonusi i guardrail-ovi.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {gamesCatalog.map(game => (
              <button
                key={game.id}
                onClick={() => setSelectedPlan(game)}
                style={{
                  ...sectionCard,
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderColor: selectedPlan.id === game.id ? 'rgba(124,58,237,0.55)' : 'rgba(0,212,255,0.14)',
                  boxShadow: selectedPlan.id === game.id ? '0 0 0 1px rgba(124,58,237,0.25)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '14px' }}>
                  <span style={badgeStyle(game.status === 'live' ? '#10b981' : '#f59e0b')}>
                    {game.status === 'live' ? 'Live' : 'Pilot'}
                  </span>
                  <span style={{ color: 'var(--io-muted)', fontSize: '0.82rem' }}>{game.genre}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--io-text)' }}>{game.title}</h3>
                <p style={{ color: 'var(--io-muted)', marginBottom: '18px', minHeight: '52px' }}>{game.summary}</p>
                <div style={{ display: 'grid', gap: '10px' }}>
                  <div style={listStyle('#e2e8f0')}>🔐 {game.licensePrice}</div>
                  <div style={listStyle('#10b981')}>🟢 {game.funStartCredit}</div>
                  <div style={listStyle('#c084fc')}>🟣 {game.professionalStartCredit}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '16px' }}>⚖️ Legal & business tracks</div>
              <div style={{ display: 'grid', gap: '12px' }}>
                {legalTracks.map(track => (
                  <div key={track.model} style={listStyle('#e2e8f0')}>
                    <strong>{track.label}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '8px' }}>Plata: {track.salary}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Minimum sati: {track.weeklyHours}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Trening: {track.requiredTraining}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Ugovor: {track.contractContents}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Godišnji: {track.vacation}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Mesečno slobodno: {track.monthlyDaysOff}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Dodaci: {track.addons}</div>
                    <div style={{ color: '#f59e0b', fontSize: '0.84rem', marginTop: '6px' }}>{track.termination}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#f59e0b'), marginBottom: '16px' }}>📑 Contract tiers</div>
              <div style={{ display: 'grid', gap: '12px' }}>
                {contractTierPolicies.map(policy => (
                  <div key={policy.tier} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${tierAccent(policy.tier)}55` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginBottom: '8px' }}>
                      <strong>{policy.label}</strong>
                      <span style={{ color: tierAccent(policy.tier), fontWeight: 700 }}>{policy.baseSalary}</span>
                    </div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Minimum sati: {policy.weeklyHours}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Trening: {policy.requiredTraining}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Godišnji: {policy.vacation}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Mesečno slobodno: {policy.monthlyDaysOff}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '6px' }}>Dodaci: {policy.addons.join(' · ')}</div>
                    <div style={{ color: '#f59e0b', fontSize: '0.84rem', marginTop: '6px' }}>{policy.autoReview}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ ...sectionCard, padding: '32px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' }}>
              <div>
                <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '10px' }}>📋 Game Plan</div>
                <h2 style={{ fontSize: '1.7rem', marginBottom: '8px' }}>{selectedPlan.title}</h2>
                <p style={{ color: 'var(--io-muted)', maxWidth: '760px' }}>{selectedPlan.compliance}</p>
              </div>
              <a href="/bank/" className="btn-secondary">
                🏦 Otvori AI IQ World Bank
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              <div style={listStyle('#e2e8f0')}>
                <strong>Entry fee / player</strong>
                <div>{selectedPlan.config.entry_fee_per_player}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong>Team size</strong>
                <div>{selectedPlan.config.team_size}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong>Base prize pool</strong>
                <div>{selectedPlan.config.base_prize_pool}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong>Bonus reserve</strong>
                <div>{selectedPlan.config.bonus_reserve}</div>
              </div>
              <div style={listStyle('#e2e8f0')}>
                <strong>Operator reserve</strong>
                <div>{selectedPlan.config.operator_margin_reserve}</div>
              </div>
              <div style={listStyle(selectedPlan.config.victory_required_for_bonus ? '#10b981' : '#f59e0b')}>
                <strong>Victory required</strong>
                <div>{selectedPlan.config.victory_required_for_bonus ? 'Da, za sve bonuse' : 'Ne'}</div>
              </div>
            </div>

            {selectedPlan.config.sponsor_boost && (
              <div
                style={{
                  ...sectionCard,
                  padding: '18px 20px',
                  marginBottom: '24px',
                  background: 'rgba(16,185,129,0.08)',
                  borderColor: 'rgba(16,185,129,0.28)',
                }}
              >
                <strong style={{ display: 'block', marginBottom: '6px', color: '#10b981' }}>Sponsor / promotional boost</strong>
                <span style={{ color: 'var(--io-text)' }}>{selectedPlan.config.sponsor_boost}</span>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div>
                <h3 style={{ marginBottom: '14px' }}>Ko sme da igra</h3>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                  {selectedPlan.gamePlan.eligibility.map(rule => (
                    <li key={rule} style={listStyle('#e2e8f0')}>{rule}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ marginBottom: '14px' }}>Match format</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  <div style={listStyle('#e2e8f0')}>
                    <strong>Format:</strong> {selectedPlan.gamePlan.matchFormat}
                  </div>
                  <div style={listStyle('#e2e8f0')}>
                    <strong>Minimum:</strong> {selectedPlan.gamePlan.minimumPlayers}
                  </div>
                  <div style={listStyle('#e2e8f0')}>
                    <strong>START fee:</strong> {selectedPlan.gamePlan.startFee}
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ marginBottom: '14px' }}>Prize logic</h3>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                  {selectedPlan.gamePlan.payouts.map(payout => (
                    <li key={payout.label} style={listStyle('#e2e8f0')}>
                      <strong>{payout.label}:</strong> {payout.value}
                      <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{payout.note}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '28px' }}>
              <div>
                <h3 style={{ marginBottom: '14px' }}>Automatic bonuses</h3>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                  {selectedPlan.gamePlan.bonusRules.map(rule => (
                    <li key={rule.id} style={listStyle(rule.category === 'automatic' ? '#10b981' : '#f59e0b')}>
                      <strong>{rule.title}</strong> · {rule.amount}
                      <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{rule.note}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ marginBottom: '14px' }}>Reviewed team contribution</h3>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '10px' }}>
                  {selectedPlan.gamePlan.reviewedMetrics.map(metric => (
                    <li key={metric.title} style={listStyle(metric.payoutMode === 'manual-review' ? '#f59e0b' : '#10b981')}>
                      <strong>{metric.title}</strong>
                      <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{metric.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>📈 Weekly rank formula</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {rankFactors.map(item => (
                  <div key={item.title} style={listStyle('#e2e8f0')}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                      <strong>{item.title}</strong>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>{item.weight}</span>
                    </div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '16px' }}>🏅 Weekly rank snapshots</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {weeklyRankSnapshots.map(player => (
                  <div key={player.player} style={{ ...listStyle('#e2e8f0'), border: `1px solid ${statusAccent(player.status)}44` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginBottom: '6px' }}>
                      <strong>{player.player}</strong>
                      <span style={{ color: statusAccent(player.status), fontWeight: 700 }}>{player.movement}</span>
                    </div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>{player.game}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Global rank: {player.globalRank} · Game rank: {player.gameRank}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Status: {player.status} · Tier: {player.contractTier}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Validni sati: {player.validHours}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.84rem', marginTop: '4px' }}>{player.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '16px' }}>⏱️ Work hours & leave</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {workRules.map(rule => (
                  <div key={rule.title} style={listStyle('#e2e8f0')}>
                    <strong>{rule.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{rule.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#f59e0b'), marginBottom: '16px' }}>💸 Salary, premiums & addons</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {compensationRules.map(rule => (
                  <div key={rule.title} style={listStyle('#e2e8f0')}>
                    <strong>{rule.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{rule.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '16px' }}>💼 Wallet / Ledger</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                <div style={listStyle('#e2e8f0')}><strong>Available</strong><div>{walletSnapshot.available}</div></div>
                <div style={listStyle('#f59e0b')}><strong>Reserved</strong><div>{walletSnapshot.reserved}</div></div>
                <div style={listStyle('#10b981')}><strong>Pending payout</strong><div>{walletSnapshot.pendingPayout}</div></div>
                <div style={listStyle('#ef4444')}><strong>Locked review</strong><div>{walletSnapshot.lockedForReview}</div></div>
              </div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {ledgerEntries.map(entry => (
                  <div key={entry.title} style={listStyle('#e2e8f0')}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginBottom: '4px' }}>
                      <strong>{entry.title}</strong>
                      <span>{entry.amount}</span>
                    </div>
                    <div style={{ color: '#06b6d4', fontSize: '0.84rem' }}>{entry.state}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{entry.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>🔄 Match lifecycle</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {lifecycleSteps.map((step, index) => (
                  <div key={step.id} style={listStyle('#e2e8f0')}>
                    <strong>{index + 1}. {step.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{step.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 className="section-title">Weekly Bounty Program</h2>
            <p className="section-subtitle">Program je vezan za top 10.000 ranked professional igrača i obračunava se tek po zatvaranju nedeljnog rank snapshot-a.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>🎯 Bounty matrix</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {bountyMatrix.map(item => (
                  <div key={`${item.targetBand}-${item.hunterBand}`} style={listStyle('#e2e8f0')}>
                    <strong>{item.targetBand}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>Hunter: {item.hunterBand}</div>
                    <div style={{ color: '#10b981', fontSize: '0.84rem' }}>Base bonus: {item.baseBonus}</div>
                    <div style={{ color: '#06b6d4', fontSize: '0.84rem' }}>Rank-up bonus: {item.rankUpBonus}</div>
                    <div style={{ color: '#f59e0b', fontSize: '0.84rem' }}>Multiplier: {item.multiplier}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#ef4444'), marginBottom: '16px' }}>🚫 Anti-abuse guardrails</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {antiAbuseBountyRules.map(rule => (
                  <div key={rule.title} style={listStyle('#e2e8f0')}>
                    <strong>{rule.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{rule.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '16px' }}>📌 Recent bounty events</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {recentBountyEvents.map(event => (
                  <div key={event.id} style={listStyle('#e2e8f0')}>
                    <strong>{event.hunter}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>Target: {event.target}</div>
                    <div style={{ color: '#10b981', fontSize: '0.84rem' }}>{event.trigger}</div>
                    <div style={{ color: '#f1f5f9', fontSize: '0.84rem' }}>Payout: {event.payout}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>Status: {event.status}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{event.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={sectionCard}>
            <div style={{ ...badgeStyle('#2563eb'), marginBottom: '16px' }}>🧾 Transactions · PDF · Email</div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {transactionHistory.map(tx => (
                <div
                  key={tx.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '12px',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--io-text)', fontWeight: 700 }}>{tx.id}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>{tx.player}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--io-text)', fontWeight: 600 }}>{tx.match}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.84rem' }}>{tx.status}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--io-text)', fontWeight: 700 }}>{tx.amount}</div>
                    <div style={{ color: '#06b6d4', fontSize: '0.84rem', textTransform: 'uppercase' }}>{tx.type}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--io-text)', fontSize: '0.84rem' }}>{tx.pdf}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>{tx.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '16px' }}>🧮 Weekly settlement</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {weeklySettlements.map(item => (
                  <div key={item.player} style={listStyle('#e2e8f0')}>
                    <strong>{item.player}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.contractStatus}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Salary: {item.salary}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Addons: {item.addons}</div>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>Bounty: {item.bounty}</div>
                    <div style={{ color: '#ef4444', fontSize: '0.84rem' }}>Penalties: {item.penalties}</div>
                    <div style={{ color: '#10b981', fontSize: '0.84rem' }}>Net: {item.net}</div>
                    <div style={{ color: '#f59e0b', fontSize: '0.84rem', marginTop: '4px' }}>{item.decision}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#2563eb'), marginBottom: '16px' }}>🧰 Operational admin controls</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {operationalControls.map(item => (
                  <div key={item.title} style={listStyle('#e2e8f0')}>
                    <strong>{item.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.detail}</div>
                    <div style={{ color: '#06b6d4', fontSize: '0.84rem', marginTop: '4px' }}>{item.audit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#f59e0b'), marginBottom: '16px' }}>🛡️ Compliance</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {complianceRequirements.map(item => (
                  <div key={item.title} style={listStyle('#e2e8f0')}>
                    <strong>{item.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#ef4444'), marginBottom: '16px' }}>🚨 Anti-fraud</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {antiFraudRules.map(item => (
                  <div key={item.title} style={listStyle('#e2e8f0')}>
                    <strong>{item.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '16px' }}>🧰 Admin controls</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {adminControls.map(item => (
                  <div key={item.title} style={listStyle('#e2e8f0')}>
                    <strong>{item.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 className="section-title">Fun/Test Playground</h2>
            <p className="section-subtitle">
              Postojeće browser igrice ostaju dostupne kao bezbedan prostor za trening, testiranje i onboarding.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            {MINI_GAMES.map(game => (
              <button
                key={game.id}
                onClick={() => setActiveMiniGame(game.id)}
                style={{
                  ...sectionCard,
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderColor: activeMiniGame === game.id ? `${game.color}66` : 'rgba(0,212,255,0.14)',
                  background: activeMiniGame === game.id ? `${game.color}12` : 'rgba(18, 35, 64, 0.7)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{game.icon}</div>
                <h3 style={{ marginBottom: '8px', color: 'var(--io-text)' }}>{game.title}</h3>
                <p style={{ color: 'var(--io-muted)', fontSize: '0.9rem' }}>{game.desc}</p>
              </button>
            ))}
          </div>

          <div style={{ ...sectionCard, padding: '32px 24px' }}>
            {activeMiniGame === 'tictactoe' && (
              <>
                <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>⭕ Tic-Tac-Toe</h3>
                <TicTacToe />
              </>
            )}
            {activeMiniGame === 'quiz' && (
              <>
                <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>🧠 Tehnološki Kviz</h3>
                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                  <GameHub />
                </div>
              </>
            )}
            {activeMiniGame === 'chess' && (
              <>
                <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>♟️ Chess</h3>
                <Chess />
              </>
            )}
            {activeMiniGame === 'pong' && (
              <>
                <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>🏓 Multiplayer Pong</h3>
                <Pong />
              </>
            )}
          </div>

          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
            <Leaderboard game="quiz" title="Quiz Rang Lista" />
          </div>
        </div>
      </section>
    </main>
  );
}
