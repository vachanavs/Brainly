import { LabelProps } from "./Heading";

export function SubHeading({label}: LabelProps) {
 return <div className="text-slate-400 text-sm py-4">
    {label}
 </div>
}