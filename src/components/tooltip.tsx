
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
}

export default function Tooltip({ tooltip, children }: Props) {
    return (
    <div className="group relative flex flex-nowrap whitespace-nowrap">
        {children}
        <span className="absolute top-0 left-12 scale-0 transition-all rounded bg-sky-600 p-2 text-xs text-white group-hover:scale-100">{tooltip}</span>
    </div>
    )
}
