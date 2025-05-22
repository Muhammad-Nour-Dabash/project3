"use client";

import { useState, useTransition } from "react";
import { submitMessage } from "./actions";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitMessage(formData);
      if (result?.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // Auto-hide after 3s
      }
    });
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4 relative">
      <h1 className="text-2xl font-bold text-blue-600">📬 Contact Us</h1>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`bg-blue-600 text-white font-medium px-4 py-2 rounded transition ${
            isPending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>
      {success && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-green-600 font-semibold">
            ✅ Message sent successfully!
          </p>
        </div>
      )}
    </div>
  );
}
