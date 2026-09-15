import { universityProgram, type UniversityUnit } from '../data/university';

export function getDefaultUniversityUnit(): UniversityUnit {
  return universityProgram.units[0];
}

export function getSelectedUniversityUnit(code?: UniversityUnit['code']): UniversityUnit {
  return universityProgram.units.find(unit => unit.code === code) ?? getDefaultUniversityUnit();
}

export function getUniversityUnitAriaLabel(unit: UniversityUnit): string {
  return `Izaberi akademsku jedinicu ${unit.code} — ${unit.title}`;
}
