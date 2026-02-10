import { ComponentProps } from "react";

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <div>
      <input type="file" className="sr-only" id="photo" {...props}/>
    </div>
  );
}
