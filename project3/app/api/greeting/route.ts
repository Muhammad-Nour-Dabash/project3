export async function GET() {
  // add 2 sec delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Response.json({
    message: "Welcome to Project 3! 🎉",
    timestamp: new Date().toISOString(),
  });
}
