"use client";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function SecretData() {
  const [loading, setLoading] = useState(true);
  const [secret, setSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/secret", {
      headers: {
        Authorization: "Bearer mysecrettoken123", // ✅ correct token
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).error);
        return res.json();
      })
      .then((data) =>
        setSecret(
          `${data.secret} (at ${new Date(data.issuedAt).toLocaleTimeString()})`
        )
      )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
      {loading && <Loading />}
      {secret && <p className="text-green-600 font-semibold">✅ {secret}</p>}
      {error && <p className="text-red-500 font-semibold">❌ {error}</p>}
    </div>
  );
}
