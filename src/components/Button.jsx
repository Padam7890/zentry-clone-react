import clsx from "clsx";
import React from "react";

const Button = ({onclick, title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      onClick={onclick}
      id={id}
      className={ clsx(`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black flex gap-2 ${containerClass}`)}
    >
      {leftIcon}
      <span className=" relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
