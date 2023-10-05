"use server";

import { parse } from "@conform-to/zod";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { AddTodoSchema } from "./schema";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const todosFilePath = path.resolve(__dirname, "../../../", "todos.json");

export async function addTodo(prev: any, formData: FormData) {
  const submission = await parse(formData, { schema: AddTodoSchema });

  if (!submission.value || submission.intent !== "submit") {
    return {
      submission,
      success: false,
    };
  }

  const todo = submission.value.todo;
  const todosFile = await fs.readFile(todosFilePath, "utf-8");

  const todos = JSON.parse(todosFile);

  todos.push(todo);

  // Write the new todos to the file

  const newTodosFile = JSON.stringify(todos, null, 2);

  await fs.writeFile(todosFilePath, newTodosFile, "utf-8");

  return {
    submission,
    success: true,
  };
}
