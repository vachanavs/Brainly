import { ReactElement } from "react";

interface SideItemProps {
    icon: ReactElement;
    text: string;
    onClick:() => void;
}

export function SideItem({icon, text, onClick}: SideItemProps) {
    return <div onClick={onClick} className="flex text-gray-700 py-2 pl-2 cursor-pointer">
        <div className=" text-gray-500 pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>
        </div>
}