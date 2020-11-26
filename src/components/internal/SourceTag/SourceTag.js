import React from "react";

export const SourceTag = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={`px-10 py-3 text-center primary-extra-bold text-2xl inline-block ${className}`}
    >
      {children}
    </div>
  );
};

SourceTag.defaultProps = {
  className: "text-white bg-gray-1000",
};
