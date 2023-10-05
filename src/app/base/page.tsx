import { addTodo } from "./actions";
import { SubmitButton } from "./submit-button";

export default async function Example() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1 className="text-center text-2xl text-gray-900 font-bold mb-6">
            Example
          </h1>

          <form action={addTodo}>
            <div>
              <label
                htmlFor="todo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Todo
              </label>
              <input
                type="text"
                id="todo"
                name="todo"
                placeholder="Enter a new todo!"
                className="border-gray-300 text-black focus:ring-indigo-500 border  focus:border-indigo-500 block w-full p-2 rounded-md shadow-sm"
              />

              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
