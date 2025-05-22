export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== "Bearer mysecrettoken123") {
    return new Response(JSON.stringify({ error: "Unauthorized access" }), {
      status: 401,
    });
  }

  return Response.json({
    secret: "🎯 The secret code is GTA VI",
    issuedAt: new Date().toISOString(),
  });
}
