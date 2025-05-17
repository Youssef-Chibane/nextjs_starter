import Link from "next/link";
import SignOutButton from "@/components/Signout";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
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
      <h1 className="text-4xl font-bold">Home Page</h1>
      <div>
        {session ? (
          <SignOutButton />
        ) : (
          <Button asChild>
            <Link href="/login" className="mt-4 text-blue-500 hover:underline">
              Login
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
