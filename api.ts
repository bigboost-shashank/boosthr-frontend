export async function apiFetch(url: string, options: RequestInit = {}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      credentials: "include"
    }
  );

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
}
