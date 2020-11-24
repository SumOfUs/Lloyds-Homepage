import React from "react";

export const ChevronUp = ({
  color = "text-gray-800",
  w = "24",
  h = "24",
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`icon icon-tabler-chevron-up ${color} ${className}`}
    width={w}
    height={h}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="6 15 12 9 18 15" />
  </svg>
);
