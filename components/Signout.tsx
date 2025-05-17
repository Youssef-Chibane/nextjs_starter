"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function SignOutButton() {
  const router = useRouter();
  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
  };

  return (
    <Button asChild>
      <div
        onClick={handleClick}
        className="flex items-center justify-between w-18 cursor-pointer"
      >
        Log out
      </div>
    </Button>
  );
}
