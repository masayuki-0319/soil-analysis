import { AnalysisDisplayName, AnalysisKeyName } from './AnalysisSchema';

export type AnalysisItem = {
  keyName: AnalysisKeyName;
  displayName: AnalysisDisplayName;
  unitName: string | null;
};
