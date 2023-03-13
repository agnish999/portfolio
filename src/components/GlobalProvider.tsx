"use client";

import React, { useEffect } from "react";

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (document) {
      const blob = document.getElementById("blob");

      document.body.onpointermove = (event) => {
        const { clientX, clientY } = event;

        blob?.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      };
    }

    return () => {
      if (document) {
        document.body.onpointermove = null;
      }
    };
  }, []);

  return (
    <>
      <div id="blob"></div>
      <div id="block"></div>
      {children}
    </>
  );
}
