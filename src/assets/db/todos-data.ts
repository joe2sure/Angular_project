import { Todo } from "../../app/models";

export const todosData: Todo[] = [
    {
        id: 1,
        title: "Set up a new angular project",
        status: 'Pending',
        isCompleted: false,
        startDate: new Date(),
        dueDate: new Date()
    },
    {
        id: 2,
        title: "Have breakfast @ 12:00 pm",
        status: 'Completed',
        isCompleted: true,
        startDate: new Date(),
        dueDate: new Date()
    },
    {
        id: 3,
        title: "Give assignment on angular project learnt today",
        status: 'Pending',
        isCompleted: false,
        startDate: new Date(),
        dueDate: new Date()
    },
]