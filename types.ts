export interface VibeResponse {
  vibe: string;
  analysis: string;
  score: number;
}

export enum ReadingState {
  IDLE = 'IDLE',
  READING = 'READING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}
