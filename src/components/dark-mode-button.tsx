"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className=" cursor-pointer" size={"sm"}>
          <div className="flex dark:hidden gap-2 justify-center items-center rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
            <Sun className=" h-4 w-4" />
            <span className="text-xs md:text-sm">Light</span>
          </div>
          <div className="hidden dark:flex gap-2 justify-center items-center dark:rotate-0 dark:scale-100 transition-all -rotate-90 scale-0">
            <Moon className=" h-4 w-4" />
            <span className="text-xs md:text-sm">Dark</span>
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
