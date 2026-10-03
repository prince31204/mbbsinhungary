"use client";

import { useEffect, useMemo, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Bell, ChevronDown, LogOut, User, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type AdminProfile = {
  name?: string | null;
  email?: string | null;
};

export function AdminTopBar() {
  const { data: session } = useSession();
  const user = session?.user;
  const [profile, setProfile] = useState<AdminProfile | null>(null);

  useEffect(() => {
    let mounted = true;

    fetch("/api/admin/profile")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!mounted || !data) return;
        setProfile({ name: data.name, email: data.email });
      })
      .catch(() => {
        // Silent fallback to session values
      });

    return () => {
      mounted = false;
    };
  }, []);

  const displayName = useMemo(
    () => profile?.name || user?.name || "Admin",
    [profile?.name, user?.name],
  );
  const displayEmail = useMemo(
    () => profile?.email || user?.email || "",
    [profile?.email, user?.email],
  );

  return (
    <header className="h-16 bg-white border-b border-[#DDE5DD] flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Left: breadcrumb placeholder */}
      <div className="text-sm text-[#7A877F]">
        Welcome back,{" "}
        <span className="font-medium text-[#202D28]">{displayName}</span>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-[#7A877F] hover:text-[#202D28]"
        >
          <Bell size={18} />
        </Button>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-sm text-[#5F6F67] hover:text-[#202D28] px-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#175747] flex items-center justify-center text-[#202D28] text-xs font-semibold">
                {displayName?.charAt(0)?.toUpperCase() || "A"}
              </div>
              <span className="hidden md:block max-w-[120px] truncate">
                {displayName}
              </span>
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>
              <div className="font-medium truncate">{displayName}</div>
              <div className="text-xs text-[#7A877F] truncate">
                {displayEmail}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/profile" className="cursor-pointer">
                <User size={14} className="mr-2" /> My Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/settings" className="cursor-pointer">
                <Settings size={14} className="mr-2" /> Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-[#A52B3A] cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
            >
              <LogOut size={14} className="mr-2" /> Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
