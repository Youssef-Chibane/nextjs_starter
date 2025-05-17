import SignInSocial from "@/components/sign-in-social";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return redirect("/dashboard");
  }
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
      <h1 className="text-4xl font-bold">Login Page</h1>

      <SignInSocial provider="google">continue with Google</SignInSocial>
      <SignInSocial provider="github">continue with Github</SignInSocial>
    </div>
  );
}
