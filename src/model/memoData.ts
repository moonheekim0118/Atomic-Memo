export interface MemoData {
  id?: string;
  title?: string;
  kind?: string;
  time?: { seconds: number } | string;
  main?: string;
}

export interface SentMemoData {
  id: string;
  title: string;
  kind: string;
  time: string;
  main: string;
}
