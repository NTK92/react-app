// models.ts

export interface Transaction {
    id: string;
    type: string;
    amount: number;
    text: string;
    date: Date | null;
  }