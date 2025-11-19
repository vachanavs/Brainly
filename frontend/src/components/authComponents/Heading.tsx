export interface LabelProps {
    label: string;
}

export function Heading({label}: LabelProps) {
    return <div className="text-4xl font-bold pt-6">
        {label}
    </div>
}