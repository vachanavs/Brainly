import { useShare } from "../hooks/useShare";
import { Card } from "../components/dashboardComponents/Card";
import { BrianIcon } from "../icons/BrianIcon";

export function SharedContentPage() {
    const { shareContent } = useShare();

    return (
        <div className="p-4 min-h-screen bg-gradient-to-r from-purple-100 to-purple-200 flex flex-col">
            <h1 className=" flex gap-3 text-3xl font-bold mb-4 coda-regular"><BrianIcon /> BRAINLY</h1>
            <div className="flex flex-wrap gap-4">
                {shareContent.length > 0 ? (
                    shareContent.map(({ _id, title, type, link }) => (
                        <Card 
                            key={_id} 
                            title={title} 
                            link={link} 
                            type={type} 
                        />
                    ))
                ) : (
                    <p className="text-gray-600">No content found.</p>
                )}
            </div>
        </div>
    );
}
