"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { mainMenu } from "@/config/navigation";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav ref={navRef} className="font-medium text-[0.9rem]">
      <ul className="flex flex-col md:flex-row items-center gap-x-12 gap-y-4">
        {mainMenu.map((item) => (
          <li key={item.label} className="relative">
            {item.children ? (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  aria-expanded={openMenu === item.label}
                  className="cursor-pointer"
                >
                  {item.label}
                </button>

                {openMenu === item.label && (
                  <ul className="absolute left-0 top-full z-50 mt-2 min-w-48 rounded-lg bg-white p-2 text-gray-900 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        {child.href && (
                          <Link
                            href={child.href}
                            className="block rounded-md px-4 py-2 hover:bg-gray-100"
                            onClick={() => setOpenMenu(null)}
                          >
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              item.href && (
                <Link className="hover:text-black/50" href={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
