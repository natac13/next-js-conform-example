import { z } from "zod";

export const AddTodoSchema = z.object({
  todo: z.string().min(1).max(100),
});
