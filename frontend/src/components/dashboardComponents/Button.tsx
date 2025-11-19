import { ReactElement } from "react";

interface Buttonprops {
    variant : "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;   
    onClick?: () => void;
}

const variantClasses = {
    "primary": "bg-purple-600 text-purple-200",
    "secondary": "bg-purple-200 text-purple-600",
};

const defaultStyles = "py-2 px-4 rounded-md flex items-center cursor-pointer inset-ring-2 inset-ring-purple-600"

export function Button({variant, text, startIcon, onClick}: Buttonprops) {
    return <button onClick={onClick} className={variantClasses[variant] + "  " + defaultStyles}>
        {startIcon && <div className="pr-2">{startIcon}</div>}
        {text}
    </button>
}