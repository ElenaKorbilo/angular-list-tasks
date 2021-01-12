export interface Task {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;
}
