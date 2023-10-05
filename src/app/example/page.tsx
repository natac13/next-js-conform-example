import { addTodo } from "./actions";
import { Form } from "./form";

export default async function Example() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1 className="text-center text-2xl text-gray-900 font-bold mb-6">
            Example
          </h1>

          <Form />
        </div>
      </div>
    </div>
  );
}
