import { Link } from "react-router-dom";

interface ButtonWarningProps {
    label: string;
    buttonText: string;
    to: string;
}

export function ButtonWarning({label, buttonText, to}: ButtonWarningProps) {
    return <div className="flex justify-center text-sm py-2">
        <div>
            {label}
        </div>
        <Link to={to} className="poniter underline pl-1 font-medium">
        {buttonText}
        </Link>
    </div>
}