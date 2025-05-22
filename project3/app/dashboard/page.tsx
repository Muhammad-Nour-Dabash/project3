import SecretData from "../components/SecretData";

async function getGreeting() {
  // const res = await fetch("http://localhost:3000/api/greeting", {
  const res = await fetch("/api/greeting", {
    // Important: Force fetch from server (not cache)
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch greeting");

  return res.json();
}

export default async function DashboardPage() {
  const { message, timestamp } = await getGreeting();

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">📊 Dashboard</h1>
      <div className="space-y-2 border border-gray-200 rounded-lg p-4 bg-gray-50">
        <h1 className="text-lg font-semibold">Public API example (SRR)</h1>
        <p className="text-gray-800">
          Message: <strong>{message}</strong>
        </p>
        <p className="text-sm text-gray-500">
          Fetched at: {new Date(timestamp).toLocaleString()}
        </p>
      </div>
      <hr />
      <div className="space-y-2 border border-gray-200 rounded-lg p-4 bg-gray-50">
        <h1 className="text-lg font-semibold">Private API example (CSR)</h1>
        <SecretData />
      </div>
    </div>
  );
}
