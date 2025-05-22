"use server";

export async function submitMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;
  console.log(name, message);
  return { success: true };
}
