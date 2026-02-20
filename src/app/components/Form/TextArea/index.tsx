import { ComponentProps } from "react";

export type TextareaProps = ComponentProps<"textarea"> 

export function TextArea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-30 resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
