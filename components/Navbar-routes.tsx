"use client";

import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();
  

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/dashboard" >
        <Button>
          <LogOut className="h-3 w-4 mr-2" />
          Exit
        </Button>
       </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button>Teacher mode</Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
};

export default NavbarRoutes;
