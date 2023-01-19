import { create } from "zustand";
import { generateId } from "../helpers";

interface Task {
  id: string;
  title: string;
  createAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createdTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [{ id: "asdasdas", title: "Default task", createAt: 12312 }],
  createdTask: (title) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      title,
      createAt: Date.now(),
    };
    set({
      tasks: [newTask].concat(tasks),
    });
  },
  updateTask: (id: string, title: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title,
      })),
    });
  },
  removeTask: (id: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id),
    });
  },
}));
