/** Documentation snapshot; this catalog does not grant academic or financial status. */
export const universityCatalogSource = {
  repository: 'spaja86/AI-IQ-SUPER-PLATFORMA',
  revision: 'f6c2be5b25d5849193c9067b1f3f5aa67480d4ef',
  path: 'docs/ECOSYSTEM-REFERENCE-LIST.md',
  blobSha: 'edcae21c9accdf67b9ee8b8ee2f2677ff4a29d45',
  url: 'https://github.com/spaja86/AI-IQ-SUPER-PLATFORMA/blob/f6c2be5b25d5849193c9067b1f3f5aa67480d4ef/docs/ECOSYSTEM-REFERENCE-LIST.md',
} as const;

export type UniversityCatalogRepository = 'AI-IQ-SUPER-PLATFORMA' | 'IO-OPENUI-AO';
export type UniversityCatalogStatus = 'documented' | 'reserved';
export interface UniversityCatalogEntry {
  id: string;
  position: number;
  name: string;
  repository: UniversityCatalogRepository | null;
  status: UniversityCatalogStatus;
  boundary: string;
  aliases: readonly string[];
}

export const universityCatalog: readonly UniversityCatalogEntry[] = [
  { id: 'matematicki', position: 1, name: 'Kraljevski Matematički Univerzitet', repository: 'AI-IQ-SUPER-PLATFORMA', status: 'documented', boundary: 'EXTREM readiness signal', aliases: [] },
  { id: 'fizika', position: 2, name: 'Kraljevska Fizika Univerzitet', repository: 'AI-IQ-SUPER-PLATFORMA', status: 'documented', boundary: 'EXTREM readiness signal', aliases: [] },
  { id: 'masinski', position: 3, name: 'Kraljevski Mašinski Univerzitet', repository: 'AI-IQ-SUPER-PLATFORMA', status: 'documented', boundary: 'Interpretativni alias: Kraljevska Mehanika Univerzitet', aliases: ['Kraljevska Mehanika Univerzitet'] },
  { id: 'ekonomski', position: 4, name: 'Kraljevski Ekonomski Uneverzitet', repository: 'AI-IQ-SUPER-PLATFORMA', status: 'documented', boundary: 'Bounded productivity/value coordination signal', aliases: [] },
  { id: 'pravni', position: 5, name: 'Kraljevski Pravni Univerzitet', repository: 'AI-IQ-SUPER-PLATFORMA', status: 'documented', boundary: 'Legal-governance track', aliases: [] },
  { id: 'programski', position: 6, name: 'Kraljevski Programski Uneverzitet', repository: 'AI-IQ-SUPER-PLATFORMA', status: 'documented', boundary: 'Developer/Create programski track', aliases: [] },
  { id: 'proporcionalno', position: 7, name: 'Spajino Proporcionalno Programiranje Univerzitet', repository: 'AI-IQ-SUPER-PLATFORMA', status: 'documented', boundary: 'Tehnički univerzitetski pod-track', aliases: [] },
  { id: 'uneverzitet', position: 8, name: 'UNEVERZITET · PAN · SER · DAK · UPR · DOK · DUN', repository: 'IO-OPENUI-AO', status: 'documented', boundary: 'Digitalni univerzitet za obrazovanje, testiranje, sertifikaciju i profesionalni readiness', aliases: [] },
  { id: 'gaming', position: 9, name: 'Gaming profesionalni smer u UNEVERZITET-u', repository: 'IO-OPENUI-AO', status: 'documented', boundary: 'Gaming je postojeći industrijski smer; profesionalni payout ostaje manual-review/compliance tok', aliases: [] },
  { id: 'rezervisano-10', position: 10, name: 'Rezervisano za kanonski naziv koji potvrdi vlasnik proizvoda', repository: null, status: 'reserved', boundary: 'Ne objavljivati kao aktivnu traku dok naziv, repo i ownership nisu eksplicitno potvrđeni', aliases: [] },
];

function searchKey(value: string): string {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('sr-Latn').replaceAll('đ', 'dj').replaceAll('uneverzitet', 'univerzitet');
}

export function filterUniversityCatalog(
  query = '',
  status: UniversityCatalogStatus | 'all' = 'all',
  entries: readonly UniversityCatalogEntry[] = universityCatalog,
): readonly UniversityCatalogEntry[] {
  const words = searchKey(query).trim().split(/\s+/).filter(Boolean);
  return entries.filter(entry => {
    const text = searchKey([entry.name, entry.repository ?? '', entry.boundary, ...entry.aliases].join(' '));
    return (status === 'all' || entry.status === status) && words.every(word => text.includes(word));
  });
}

export function getUniversityCatalogCounts(entries: readonly UniversityCatalogEntry[] = universityCatalog) {
  return { total: entries.length, documented: entries.filter(entry => entry.status === 'documented').length, reserved: entries.filter(entry => entry.status === 'reserved').length };
}
