import React from "react";
import styles from "./index.module.scss";
import { useToDoStore } from "../../data/stores/UseToDoStore";
import {InputPlus} from "../components/InputPlus";

export const App: React.FC = () => {
  const [tasks, createdTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createdTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do APP</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createdTask(title);
            }
          }}
        />
      </section>
      <section className={styles.articleSection}></section>
    </article>
  );
};
