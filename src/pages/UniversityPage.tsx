import React, { useMemo, useState } from 'react';
import { universityProgram } from '../data/university';

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

const accentByCode = {
  PAN: '#10b981',
  SER: '#06b6d4',
  DAK: '#7c3aed',
  UPR: '#f59e0b',
  DOK: '#2563eb',
  DUN: '#ef4444',
} as const;

export default function UniversityPage() {
  const [selectedUnitCode, setSelectedUnitCode] = useState(universityProgram.units[0]?.code ?? 'PAN');
  const selectedUnit = useMemo(
    () => universityProgram.units.find(unit => unit.code === selectedUnitCode) ?? universityProgram.units[0],
    [selectedUnitCode],
  );

  if (!selectedUnit) {
    return null;
  }

  const selectedAccent = accentByCode[selectedUnit.code];

  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <section
        style={{
          padding: '96px 0 72px',
          background:
            'radial-gradient(circle at top, rgba(37,99,235,0.18), transparent 45%), linear-gradient(180deg, rgba(0,212,255,0.06) 0%, transparent 100%)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ ...badgeStyle('#2563eb'), margin: '0 auto 18px' }}>🎓 Digital education · certification · progression</div>
            <h1 className="section-title" style={{ marginBottom: '18px' }}>
              <span className="gradient-text">UNEVERZITET</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '860px', margin: '0 auto' }}>
              {universityProgram.heroSummary}
            </p>
            <div
              style={{
                ...sectionCard,
                marginTop: '28px',
                border: '1px solid rgba(37,99,235,0.28)',
                background: 'rgba(37,99,235,0.08)',
                textAlign: 'left',
              }}
            >
              <div style={{ ...badgeStyle('#2563eb'), marginBottom: '12px' }}>🏛️ Akademski stub platforme</div>
              <p style={{ color: 'var(--io-text)' }}>
                {universityProgram.heroTitle} funkcioniše kao poseban sistem koji spaja obrazovanje, testiranje,
                sertifikaciju, praktičan rad i dokazivu spremnost za viši pristup platformi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>🎯 Vizija</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {universityProgram.mission.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '16px' }}>🧱 Akademska arhitektura</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {universityProgram.architecture.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ ...sectionCard, marginBottom: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ ...badgeStyle('#f59e0b'), margin: '0 auto 16px' }}>🧭 6 akademskih jedinica</div>
              <h2 className="section-title" style={{ marginBottom: '12px' }}>PAN · SER · DAK · UPR · DOK · DUN</h2>
              <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '860px' }}>
                Korisnik napreduje kroz jasno definisan put: od osnove i discipline do završnog elitnog nivoa.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '24px' }}>
              {universityProgram.units.map(unit => (
                <button
                  key={unit.code}
                  onClick={() => setSelectedUnitCode(unit.code)}
                  aria-pressed={selectedUnitCode === unit.code}
                  style={{
                    ...sectionCard,
                    padding: '18px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderColor: selectedUnitCode === unit.code ? `${accentByCode[unit.code]}88` : 'rgba(0,212,255,0.14)',
                    background: selectedUnitCode === unit.code ? `${accentByCode[unit.code]}14` : 'rgba(18, 35, 64, 0.7)',
                  }}
                >
                  <div style={{ ...badgeStyle(accentByCode[unit.code]), marginBottom: '10px' }}>{unit.code}</div>
                  <strong style={{ display: 'block', marginBottom: '8px', color: 'var(--io-text)' }}>{unit.title}</strong>
                  <span style={{ color: 'var(--io-muted)', fontSize: '0.84rem' }}>{unit.difficulty}</span>
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ ...sectionCard, borderColor: `${selectedAccent}66` }}>
                <div style={{ ...badgeStyle(selectedAccent), marginBottom: '16px' }}>{selectedUnit.code}</div>
                <h2 style={{ fontSize: '1.7rem', marginBottom: '8px' }}>{selectedUnit.title}</h2>
                <p style={{ color: 'var(--io-text)', marginBottom: '10px' }}>{selectedUnit.motto}</p>
                <p style={{ color: 'var(--io-muted)' }}>{selectedUnit.mission}</p>
              </div>

              <div style={sectionCard}>
                <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '16px' }}>🔍 Fokus</div>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {selectedUnit.focus.map(item => (
                    <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                  ))}
                </div>
              </div>

              <div style={sectionCard}>
                <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>✅ Završni ishod</div>
                <div style={listStyle('#e2e8f0')}>{selectedUnit.outcome}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>📘 Obavezni moduli</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {selectedUnit.mandatoryModules.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#f59e0b'), marginBottom: '16px' }}>🛠️ Praktičan rad</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {selectedUnit.practicalWork.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#2563eb'), marginBottom: '16px' }}>🧪 Model testiranja</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {selectedUnit.testingModel.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '16px' }}>📊 Kriterijumi prolaza</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {selectedUnit.passingCriteria.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#ef4444'), marginBottom: '16px' }}>⚠️ Rizici i zabrane</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {selectedUnit.risks.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ ...badgeStyle('#06b6d4'), margin: '0 auto 16px' }}>📈 Put napredovanja</div>
            <h2 className="section-title">PAN → SER → DAK → UPR → DOK → DUN</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '840px' }}>
              Napredovanje je fazno i svaki prelaz traži prag znanja, praktični dokaz i proveru integriteta.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {universityProgram.progression.map(stage => (
              <div key={stage.title} style={sectionCard}>
                <div style={{ ...badgeStyle('#06b6d4'), marginBottom: '12px' }}>{stage.gate}</div>
                <h3 style={{ marginBottom: '10px' }}>{stage.title}</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {stage.requirements.map(item => (
                    <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>{universityProgram.evaluation.title}</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {universityProgram.evaluation.items.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#ef4444'), marginBottom: '16px' }}>{universityProgram.integrity.title}</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {universityProgram.integrity.items.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#7c3aed'), marginBottom: '16px' }}>🏅 Akademski statusi</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {universityProgram.statuses.map(status => (
                  <div key={status.title} style={listStyle('#e2e8f0')}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>{status.title}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginBottom: '6px' }}>{status.meaning}</div>
                    <div style={{ color: '#cbd5e1', fontSize: '0.84rem' }}>{status.unlocks}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#f59e0b'), marginBottom: '16px' }}>🗓️ Nedeljni, mesečni i sezonski rad</div>
              <div style={{ display: 'grid', gap: '12px' }}>
                {universityProgram.cadence.map(item => (
                  <div key={item.label} style={listStyle('#e2e8f0')}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>{item.label}</strong>
                    <div style={{ color: 'var(--io-muted)', fontSize: '0.84rem', marginBottom: '8px' }}>{item.summary}</div>
                    <ul style={{ listStyle: 'none', display: 'grid', gap: '6px' }}>
                      {item.items.map(entry => (
                        <li key={entry} style={{ color: 'var(--io-text)' }}>• {entry}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#2563eb'), marginBottom: '16px' }}>🌉 Profesionalni most</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {universityProgram.professionalBridge.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>

            <div style={sectionCard}>
              <div style={{ ...badgeStyle('#10b981'), marginBottom: '16px' }}>🚀 Rollout faze</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {universityProgram.rollout.map(item => (
                  <div key={item} style={listStyle('#e2e8f0')}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
