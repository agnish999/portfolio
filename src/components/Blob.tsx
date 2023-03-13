"use client";
import React, { useEffect } from "react";

export default function Blob() {
  //   useEffect(() => {
  //     if (document) {
  //       const blob = document.getElementsByClassName("blob");

  //       document.body.onpointermove = (event) => {
  //         const { clientX, clientY } = event;
  //         [...blob]?.map((b) =>
  //           b.animate(
  //             {
  //               left: `${clientX}px`,
  //               top: `${clientY}px`,
  //             },
  //             { duration: 3000, fill: "forwards" }
  //           )
  //         );
  //       };
  //     }

  //     return () => {
  //       if (document) {
  //         document.body.onpointermove = null;
  //       }
  //     };
  //   }, []);

  return (
    <>
      <div className="blob"></div>
    </>
  );
}
