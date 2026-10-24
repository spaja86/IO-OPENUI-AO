import test from 'node:test';
import assert from 'node:assert/strict';
import { universityCatalog, universityCatalogSource, filterUniversityCatalog, getUniversityCatalogCounts } from './universityCatalog.ts';

test('imports exactly ten source positions without inflating the named count', () => {
  assert.deepEqual(getUniversityCatalogCounts(), { total: 10, documented: 9, reserved: 1 });
  assert.deepEqual(universityCatalog.map(entry => entry.position), [1,2,3,4,5,6,7,8,9,10]);
  assert.equal(new Set(universityCatalog.map(entry => entry.id)).size, 10);
  assert.equal(new Set(universityCatalog.map(entry => entry.name)).size, 10);
});

test('reserved position has no owner and is never selected as documented', () => {
  const reserved = filterUniversityCatalog('', 'reserved');
  assert.equal(reserved.length, 1);
  assert.equal(reserved[0].position, 10);
  assert.equal(reserved[0].repository, null);
  assert.equal(filterUniversityCatalog('rezervisano', 'documented').length, 0);
});

test('search supports diacritics, source spelling and mechanical alias', () => {
  assert.equal(filterUniversityCatalog('matematicki')[0]?.id, 'matematicki');
  assert.equal(filterUniversityCatalog('MEHANIKA')[0]?.id, 'masinski');
  assert.equal(filterUniversityCatalog('ekonomski univerzitet')[0]?.id, 'ekonomski');
  assert.equal(filterUniversityCatalog('programski uneverzitet')[0]?.id, 'programski');
  assert.equal(filterUniversityCatalog('io-openui-ao').length, 2);
  assert.equal(filterUniversityCatalog('nepostojeći smer').length, 0);
  assert.equal(filterUniversityCatalog('   ').length, 10);
});

test('retains source attribution and the gaming/manual-review boundary', () => {
  assert.match(universityCatalogSource.url, /\/blob\/[a-f0-9]{40}\/docs\/ECOSYSTEM-REFERENCE-LIST\.md$/);
  assert.equal(universityCatalog.filter(entry => entry.repository === 'AI-IQ-SUPER-PLATFORMA').length, 7);
  assert.match(universityCatalog.find(entry => entry.id === 'gaming')!.boundary, /manual-review\/compliance/);
  assert.equal(universityCatalog.find(entry => entry.id === 'uneverzitet')!.name, 'UNEVERZITET · PAN · SER · DAK · UPR · DOK · DUN');
});
