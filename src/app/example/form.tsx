"use client";

import { conform, useForm } from "@conform-to/react";
import { SubmitButton } from "./submit-button";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { addTodo } from "./actions";
import { experimental_useFormState } from "react-dom";
import { AddTodoSchema } from "./schema";
import { useEffect } from "react";

export function Form() {
  const [state, formAction] = experimental_useFormState(addTodo, {
    submission: {
      error: {},
      intent: "idle",
      payload: {},
      values: { todo: "" },
    },
    success: null,
  });
  const [form, fields] = useForm({
    constraint: getFieldsetConstraint(AddTodoSchema),
    lastSubmission: state.submission,
    defaultValue: {
      todo: "",
    },
    shouldRevalidate: "onSubmit",
    onValidate({ formData }) {
      return parse(formData, { schema: AddTodoSchema });
    },
  });

  console.log("state", state);
  console.log("form", form);
  console.log("fields", fields);

  const success = state.success;

  useEffect(() => {
    if (success) {
      console.log("success", state.success);
      form.ref.current?.reset();
    }
  }, [success]);

  return (
    <form action={formAction} {...form.props}>
      <div>
        <label
          htmlFor={fields.todo.id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          New Todo
        </label>
        <input
          {...conform.input(fields.todo, {
            type: "text",
          })}
          placeholder="Enter a new todo!"
          className="border-gray-300 text-black focus:ring-indigo-500 border  focus:border-indigo-500 block w-full p-2 rounded-md shadow-sm"
        />
        {fields.todo.errors && (
          <ul className="mt-2 text-sm text-red-600">
            {fields.todo.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <SubmitButton />
      </div>
    </form>
  );
}
