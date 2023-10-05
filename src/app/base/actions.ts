"use server";

import { RedirectType, redirect } from "next/navigation";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const todosFilePath = path.resolve(__dirname, "../../", "todos.json");

export async function addTodo(formData: FormData) {
  const todo = formData.get("todo");

  if (!todo) {
    throw new Error("No todo provided");
  }

  if (typeof todo !== "string") {
    throw new Error("Todo is not a string");
  }

  const todosFile = await fs.readFile(todosFilePath, "utf-8");

  const todos = JSON.parse(todosFile);

  todos.push(todo);

  // Write the new todos to the file

  const newTodosFile = JSON.stringify(todos, null, 2);

  await fs.writeFile(todosFilePath, newTodosFile, "utf-8");

  redirect("/example");
  return todos;
}
