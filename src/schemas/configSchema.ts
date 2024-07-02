import { z } from "zod";

const buttonSchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
  description: z.string().optional(),
  command: z.string(),
});

export const configSchema = z.object({
  buttons: z.array(buttonSchema),
});
