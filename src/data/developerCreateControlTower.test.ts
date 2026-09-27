import test from 'node:test';
import assert from 'node:assert/strict';
import { CONTROL_TOWER_SCORE_SNAPSHOTS, DOMAIN_SCORECARDS } from './developerCreate.ts';

test('all developer-create domain scorecards expose a bounded meta-governance score', () => {
  for (const scorecard of DOMAIN_SCORECARDS) {
    assert.equal(typeof scorecard.scores.metaGovernance, 'number');
    assert.ok(scorecard.scores.metaGovernance >= 0);
    assert.ok(scorecard.scores.metaGovernance <= 100);
  }
});

test('developer-create scorecard keeps the approved meta-governance layer visible', () => {
  const controlTowerScorecard = DOMAIN_SCORECARDS.find(scorecard => scorecard.domain === '/developer-create');

  assert.ok(controlTowerScorecard);
  assert.match(controlTowerScorecard.nextUnlock, /MONTEZACIJA NAD MONTEZACIJAMA/);
});

test('control-tower score snapshots include meta-governance values for every route snapshot', () => {
  for (const snapshot of CONTROL_TOWER_SCORE_SNAPSHOTS) {
    assert.equal(typeof snapshot.metaGovernance, 'number');
    assert.ok(snapshot.metaGovernance >= 0);
    assert.ok(snapshot.metaGovernance <= 100);
  }
});
