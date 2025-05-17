import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return redirect("/login");
  }

  const user = session.user;
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="mb-4 space-x-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Dashboard
        </Link>
      </div>
      <h1 className="text-4xl font-bold">Dashboard Page</h1>
      <h2 className="text-2xl font-bold">Welcome {user.name}</h2>
      <p>This is You're Email: {user.email}</p>
    </div>
  );
}
