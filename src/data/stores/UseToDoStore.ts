import { create } from "zustand";

interface Task {
  id: string;
  title: string;
  createAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createdTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
}
