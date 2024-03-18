"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Nav() {
  const links = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/projects",
      name: "projects",
    },
    {
      path: "/contact",
      name: "contact",
    },
  ];
  const pathname = usePathname();
  const MotionLink = motion(Link);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  return (
    <nav className=" p-8">
      <ul className=" flex gap-12">
        {links.map((link) => {
          return (
            <motion.li key={link.path}>
              <MotionLink
                href={link.path}
                className={cn(
                  " font-medium text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200 rounded-md",
                  pathname === link.path ? "bg-slate-300" : ""
                )}
              >
                <span>{link.name}</span>
              </MotionLink>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
