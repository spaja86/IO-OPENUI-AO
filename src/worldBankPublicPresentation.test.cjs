const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const files = ['src/constants/index.ts', 'src/utils/constants.ts', 'src/pages/Home.tsx', 'src/components/Footer.tsx', 'src/components/ChatbotWidget.tsx'];
test('all bank entry points disclose the lack of an NBS bank licence', () => {
  for (const name of files) assert.match(read(name), /bez dozvole NBS za rad banke/, name);
});
test('both platform registries mark the bank software as in development', () => {
  for (const name of files.slice(0, 2)) {
    const text = read(name);
    const bank = text.slice(text.indexOf("name: 'Ai-Iq-World-Bank'"), text.indexOf('  },', text.indexOf("name: 'Ai-Iq-World-Bank'")));
    assert.match(bank, /status: 'development'/);
    assert.match(bank, /Demonstracioni softver/);
  }
});
test('legacy bank, settlement and licensing claims do not return', () => {
  for (const name of files) assert.doesNotMatch(read(name), /Profesionalna svetska banka|settlement, remittance i treasury tokovima|AI IQ World Bank licence|Tipova licenci u bank sloju/, name);
  assert.match(read('src/components/ChatbotWidget.tsx'), /ne prima depozite, ne izdaje kartice i ne izvršava uplate/);
});
test('changed TypeScript and JSX source parses without syntax errors', () => {
  for (const name of files) {
    const file = ts.createSourceFile(name, read(name), ts.ScriptTarget.Latest, true, name.endsWith('tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
    assert.deepEqual(file.parseDiagnostics, [], name);
  }
});
