import { BtnStyles } from "@/utils/variants";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div
      className="flex items-center gap-5 content-width fixed w-screen z-50"
      style={{ maxWidth: "100vw" }}
    >
      {/* logo */}
      <div className="mr-auto text-3xl font-bold text-[var(--clr-secondary)]">
        manik.agnish
      </div>

      {/* cta */}
      <button className={BtnStyles({ color: "primary", type: "outline" })}>
        Get in touch
      </button>

      {/* menu */}
      <button
        className={BtnStyles({ color: "primary", type: "menu" })}
        style={{ fontSize: 24 }}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
