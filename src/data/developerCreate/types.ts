export type DeveloperCreatePillarName =
  | 'Product'
  | 'Platform'
  | 'Content'
  | 'Operations'
  | 'Trust & Governance'
  | 'AI/Agent Execution';

export type ControlTowerStatus = 'planned' | 'active' | 'pilot' | 'live' | 'enterprise-ready';
export type ReadinessSignal = 'ready' | 'partial' | 'blocked';
export type RiskSeverity = 'low' | 'medium' | 'high' | 'critical';
export type ControlTowerTrend = 'up' | 'stable' | 'watch';
export type ChangeClass = 'content' | 'feature' | 'governance' | 'automation' | 'config' | 'security-critical';

export interface DeveloperCreateNorthStar {
  title: string;
  mission: string;
  why: string[];
  measures: string[];
}

export interface ProgramHierarchyLayer {
  layer: 'Strategy' | 'Standards' | 'Gates' | 'Metrics' | 'Domain execution' | 'Review loop';
  summary: string;
  outputs: string[];
}

export interface DeveloperCreatePillar {
  pillar: DeveloperCreatePillarName;
  mission: string;
  outcomes: string[];
}

export interface RepositoryDomainBoundary {
  area: '/games' | '/spajapro' | '/university' | '/developer-create';
  scope: string;
  ownership: string;
  readinessFocus: string;
}

export interface ControlTowerDomainStatus {
  domain: '/games' | '/spajapro' | '/university';
  status: ControlTowerStatus;
  focus: string;
  trend: ControlTowerTrend;
  blocker: string;
  nextDecision: string;
}

export interface DomainReadinessMatrix {
  domain: '/games' | '/spajapro' | '/university';
  product: ReadinessSignal;
  tech: ReadinessSignal;
  security: ReadinessSignal;
  compliance: ReadinessSignal;
  operations: ReadinessSignal;
}

export interface OwnershipRole {
  lane: string;
  owner: string;
  reviewer: string;
  approver: string;
  escalation: string;
}

export interface DependencyMapItem {
  domain: '/games' | '/spajapro' | '/university';
  dependsOn: string[];
  blockedBy: string[];
  readyFor: string[];
}

export interface ReleaseMaturityStage {
  stage: string;
  goal: string;
  exitCriteria: string[];
}

export interface RiskBoardItem {
  category: string;
  level: RiskSeverity;
  signal: string;
  mitigation: string;
}

export interface GovernancePolicySection {
  title: string;
  items: string[];
}

export interface DeveloperPersona {
  persona: string;
  mandate: string;
  mustOwn: string[];
}

export interface CreateWorkflowStep {
  step: string;
  objective: string;
  hardProof: string;
}

export interface QualityContract {
  asset: string;
  contract: string[];
}

export interface StandardTemplate {
  title: string;
  sections: string[];
}

export interface LockedMetric {
  metric: string;
  target: string;
  whyItMatters: string;
}

export interface OperatingPhase {
  phase: string;
  objective: string;
  outcomes: string[];
}

export interface ExtremeControlTowerLane {
  lane: string;
  owner: string;
  kpi: string;
  cadence: string;
}

export interface CanonicalVocabularyItem {
  term: string;
  definition: string;
  usage: string;
}

export interface RepositoryHealthOverview {
  status: ControlTowerStatus;
  readinessScore: number;
  trustScore: number;
  ownershipClarityScore: number;
  releaseDisciplineScore: number;
  rollbackConfidenceScore: number;
  summary: string;
  criticalBlockers: string[];
  topDecisions: string[];
}

export interface DomainScorecard {
  domain: '/games' | '/spajapro' | '/university' | '/developer-create';
  role: string;
  status: ControlTowerStatus;
  trend: ControlTowerTrend;
  nextUnlock: string;
  scores: {
    readiness: number;
    trust: number;
    ownership: number;
    release: number;
    rollback: number;
  };
  dependencies: string[];
}

export interface GovernanceRule {
  title: string;
  policy: string;
  enforcement: string;
}

export interface EvidenceMatrixItem {
  asset: string;
  evidence: string;
  reviewer: string;
  approvalGate: string;
}

export interface DecisionLogEntry {
  area: string;
  state: 'approved' | 'held' | 'blocked' | 'archived';
  reason: string;
  nextMove: string;
}

export interface ContributorGuideStep {
  step: string;
  owner: string;
  output: string;
}

export interface PolicyInheritanceRule {
  source: string;
  inheritsTo: string[];
  invariant: string;
}

export interface ControlTowerApiShape {
  object: string;
  fields: string[];
  usage: string;
}

export interface FailureModeItem {
  mode: string;
  breaks: string;
  earlySignal: string;
  response: string;
}

export interface TrustSurfaceItem {
  surface: string;
  promise: string;
  proof: string;
}

export interface ScenarioMode {
  mode: string;
  bias: string;
  mustProtect: string[];
}

export interface CapabilityRegistryItem {
  capability: string;
  owner: string;
  currentLevel: string;
  unlocks: string[];
}

export interface ChangeImpactItem {
  changeType: string;
  affects: string[];
  requiredChecks: string[];
}

export interface EscalationTrigger {
  trigger: string;
  agentLimit: string;
  humanAction: string;
}

export interface OperatingCharter {
  title: string;
  promise: string;
  operatingPrinciples: string[];
  successDefinition: string[];
}

export interface MasterCapabilityMapItem {
  area: '/games' | '/spajapro' | '/university' | '/developer-create' | 'future modules';
  currentState: string;
  targetState: string;
  stableBoundary: string;
  experimentalScope: string;
}

export interface MaturityMapEntry {
  stage: string;
  scope: string;
  exitSignal: string;
}

export interface DeliveryLaneRule {
  lane: 'stable' | 'experimental' | 'hybrid';
  purpose: string;
  protects: string[];
}

export interface DomainOperatingSignal {
  domain: '/games' | '/spajapro' | '/university' | '/developer-create';
  owner: string;
  blocker: string;
  nextDecision: string;
  requiredEvidence: string[];
  inheritedPolicies: string[];
  impactSignal: string;
  escalationLane: string;
  deliveryLane: 'stable' | 'experimental' | 'hybrid';
}

export interface CommandCenterItem {
  title: string;
  status: ControlTowerStatus | 'blocked' | 'held';
  owner: string;
  focus: string;
  whatBreaksIfSlips: string;
  nextAction: string;
}

export interface BlockerAgingItem {
  label: string;
  state: 'blocked' | 'held' | 'watch';
  age: string;
  owner: string;
  impact: string;
  nextReview: string;
}

export interface DomainRiskLens {
  domain: '/games' | '/spajapro' | '/university' | '/developer-create';
  topRisk: string;
  severity: RiskSeverity;
  tripwire: string;
  response: string;
}

export interface DemotionRule {
  from: string;
  to: string;
  trigger: string;
  proofToRecover: string;
}

export interface ChangeClassRule {
  changeClass: ChangeClass;
  minimumProof: string[];
  humanReviewRequired: string;
  escalation: string;
}

export interface ProofRequirement {
  asset: string;
  minimumProof: string[];
  failureIfMissing: string;
}

export interface OperatingException {
  exception: string;
  scope: string;
  guardrail: string;
  expiresWhen: string;
}

export interface GovernanceDebtItem {
  debt: string;
  severity: RiskSeverity;
  whyItMatters: string;
  closureSignal: string;
}

export interface FutureModuleContract {
  area: string;
  requirements: string[];
  inherits: string[];
  successSignal: string;
}

export interface ControlTowerChangelogEntry {
  version: string;
  date: string;
  highlights: string[];
  effect: string;
}

export interface MultiRepoReadinessItem {
  layer: string;
  objective: string;
  guardrail: string;
}

export interface QuarterlyDomainPlan {
  quarter: string;
  domain: '/games' | '/spajapro' | '/university' | '/developer-create';
  focus: string;
  exitSignal: string;
}
