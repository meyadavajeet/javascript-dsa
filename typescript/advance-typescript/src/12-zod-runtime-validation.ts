import { z } from "zod";

const rawUserInput: unknown = {
  name: "sangam",
  age: 57,
};

// zod schema make sure what your runtime data actually look like

const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(18),
});

type User = z.infer<typeof UserSchema>;

const result = UserSchema.safeParse(rawUserInput);

if (!result.success) {
  console.log(result.error.issues);
} else {
  const user: User = result.data;
  console.log(user.age, user.age);
}
