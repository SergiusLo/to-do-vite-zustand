import React from "react";
import styles from "./index.module.scss";
import { useToDoStore } from "../../data/stores/UseToDoStore";
import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";

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
      <section className={styles.articleSection}>
        {!tasks.length && (
          <p className={styles.articleText}>There is no one task.</p>
        )}
        {tasks.map((task) => (
          <InputTask
          key={task.id}
          id={task.id}
          title={task.title}
          onDone={() => {removeTask} }
          onEdited={() => {updateTask}}
          onRemoved={() => {removeTask}}
          />
        ))}
      </section>
    </article>
  );
};
