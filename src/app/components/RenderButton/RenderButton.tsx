"use client";

import React from "react";
import Image from "next/image";
import { runCommandAction } from "@/app/actions/run-command-action";
import { toast } from "react-toastify";

interface props {
  name: string;
  icon: string | undefined;
  description: string | undefined;
}

export const RenderButton: React.FC<props> = ({ name, icon, description }) => {
  const handleClick = async (name: string) => {
    const result = await runCommandAction(name);
    if (result.success) {
      toast.success("Command run successfully!");
    } else {
      toast.error("Error in running the command! See logs for details!");
    }
  };
  return (
    <button onClick={() => handleClick(name)}>
      <div className="shadow-lg bg-neutral-50 dark:bg-neutral-800 flex flex-col gap-2 p-5 items-center justify-center text-center hover:opacity-80 rounded-md min-h-32 md:size-48">
        {typeof icon !== "undefined" && (
          <Image src={icon} height={50} width={50} alt={name} />
        )}
        <p className="text-md text-neutral-900 dark:text-neutral-200">{name}</p>
        {typeof description !== "undefined" && (
          <p className="text-neutral-500">{description}</p>
        )}
      </div>
    </button>
  );
};
