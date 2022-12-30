export interface Note {
  noteTitle: string;
  noteContent?: string;
  noteTasks: Task[];
  isClosed: boolean;
}

export interface Task {
  taskContent: string;
  completed: boolean;
  taskReference: string;
}
