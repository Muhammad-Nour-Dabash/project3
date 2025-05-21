async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  return { message: "Welcome to the dashboard" };
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2 text-blue-600">Dashboard</h1>
      <p>{data.message}</p>
    </div>
  );
}
