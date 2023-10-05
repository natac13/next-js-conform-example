"use client";

import { experimental_useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = experimental_useFormStatus();
  return (
    <button
      type="submit"
      className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-disabled={pending}
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
}
