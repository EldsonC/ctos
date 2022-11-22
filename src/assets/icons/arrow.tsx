import React from "react";

interface ArrowColor {
  color: string
}
export function Arrow({ color }:ArrowColor) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M8.867 11.517a.632.632 0 01-.192-.484.69.69 0 01.208-.483l1.884-1.883H3.333a.646.646 0 01-.475-.192A.645.645 0 012.667 8c0-.189.063-.347.191-.475a.647.647 0 01.475-.192h7.434l-1.9-1.9a.65.65 0 01-.2-.475c0-.183.066-.341.2-.475a.65.65 0 01.475-.2c.183 0 .341.067.475.2l3.05 3.05a.59.59 0 01.142.217.745.745 0 01.041.25.745.745 0 01-.041.25.59.59 0 01-.142.217L9.8 11.533a.621.621 0 01-.458.184.65.65 0 01-.475-.2z"
      ></path>
    </svg>
  );
}