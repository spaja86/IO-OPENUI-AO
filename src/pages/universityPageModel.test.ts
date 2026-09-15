import test from 'node:test';
import assert from 'node:assert/strict';
import { universityProgram } from '../data/university.ts';
import {
  getDefaultUniversityUnit,
  getSelectedUniversityUnit,
  getUniversityUnitAriaLabel,
} from './universityPageModel.ts';

test('defaults to the first university unit', () => {
  assert.equal(getDefaultUniversityUnit().code, universityProgram.units[0].code);
  assert.equal(getSelectedUniversityUnit(undefined).code, universityProgram.units[0].code);
});

test('returns the selected unit when a different code is chosen', () => {
  const selected = getSelectedUniversityUnit('DUN');

  assert.equal(selected.code, 'DUN');
  assert.match(selected.title, /Dunavski Univerzalni Nivo/);
});

test('falls back to the default unit when selection is missing', () => {
  const selected = getSelectedUniversityUnit('XYZ' as never);

  assert.equal(selected.code, getDefaultUniversityUnit().code);
});

test('builds an accessible button label for each unit selector', () => {
  const label = getUniversityUnitAriaLabel(universityProgram.units[1]);

  assert.match(label, /SER/);
  assert.match(label, /Specijalistički Edukativni Razvoj/);
});
