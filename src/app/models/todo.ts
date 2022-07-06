export interface Todo {
 id: number;
 title: string;
 status: string;
 isCompleted: boolean;
 startDate?: Date;
 dueDate?: Date;
}