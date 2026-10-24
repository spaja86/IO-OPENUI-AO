import React, { useMemo, useState } from 'react';
import {
  filterUniversityCatalog,
  getUniversityCatalogCounts,
  universityCatalogSource,
  type UniversityCatalogStatus,
} from '../data/universityCatalog';
import './UniversityCatalog.css';

export default function UniversityCatalog() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<UniversityCatalogStatus | 'all'>('all');
  const entries = useMemo(() => filterUniversityCatalog(query, status), [query, status]);
  const counts = getUniversityCatalogCounts();

  return (
    <section className="university-catalog" aria-labelledby="university-catalog-title">
      <div className="container">
        <header>
          <p className="university-catalog__eyebrow">KATALOG IZ GITHUB IZVORA</p>
          <h2 id="university-catalog-title">Univerziteti i akademski smerovi</h2>
          <p>{counts.total} mesta u katalogu · {counts.documented} imenovanih stavki · {counts.reserved} rezervisano mesto</p>
          <p className="university-catalog__note">
            Nazivi i pripadnost preuzeti su iz referentne liste ekosistema. Katalog obuhvata univerzitetske programe,
            podprograme i smerove; ne potvrđuje akreditaciju, upis, diplomu ili pravo na isplatu.
          </p>
          <a href={universityCatalogSource.url} target="_blank" rel="noopener noreferrer">Izvorna lista na GitHubu ↗</a>
        </header>

        <div className="university-catalog__filters">
          <label htmlFor="university-catalog-search">Pretraga naziva, smera ili repozitorijuma
            <input id="university-catalog-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Na primer: matematicki, mehanika, programski…" />
          </label>
          <label htmlFor="university-catalog-status">Status u izvoru
            <select id="university-catalog-status" value={status} onChange={event => setStatus(event.target.value as UniversityCatalogStatus | 'all')}>
              <option value="all">Sve stavke</option><option value="documented">Imenovane u izvoru</option><option value="reserved">Rezervisano mesto</option>
            </select>
          </label>
        </div>
        <p role="status" aria-live="polite">Prikazano {entries.length} od {counts.total} stavki</p>
        <ol className="university-catalog__grid" aria-label="Univerzitetske trake iz referentne liste">
          {entries.map(entry => (
            <li key={entry.id} value={entry.position} className={`university-catalog__card${entry.status === 'reserved' ? ' university-catalog__card--reserved' : ''}`}>
              <div className="university-catalog__card-top"><span>#{String(entry.position).padStart(2, '0')}</span><span>{entry.status === 'reserved' ? 'Rezervisano' : 'Imenovano u izvoru'}</span></div>
              <h3>{entry.name}</h3>
              <p>{entry.boundary}</p>
              {entry.repository ? <p className="university-catalog__repo">Izvorni repozitorijum: <strong>{entry.repository}</strong></p> : <p className="university-catalog__repo">Naziv i odgovorni repozitorijum još nisu određeni.</p>}
              {entry.status === 'documented' && <a href={universityCatalogSource.url} target="_blank" rel="noopener noreferrer" aria-label={`Pogledaj izvor: ${entry.name}`}>Pogledaj izvor ↗</a>}
            </li>
          ))}
        </ol>
        {entries.length === 0 && <div className="university-catalog__empty"><p>Nema rezultata za izabranu pretragu.</p><button type="button" onClick={() => { setQuery(''); setStatus('all'); }}>Prikaži svih 10 mesta</button></div>}
      </div>
    </section>
  );
}
