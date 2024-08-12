import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import MultiStepDialog from "./MultiStepDialog";

const MagicButton = ({
  title,
  icon,
  position,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={`relative inline-flex h-12 w-full md:w-40 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#def9fa_0%,#7de7eb_50%,#33bbcf_100%)]" />

          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
          >
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </span>
        </button>
      </DialogTrigger>
      {/* Pass setOpen as a prop to MultiStepDialog */}
      <MultiStepDialog setOpen={setOpen} />
    </Dialog>
  );
};

export default MagicButton;

