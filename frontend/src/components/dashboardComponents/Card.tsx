import { CrossIcon } from "../../icons/CrossIcon";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
    onClick?: () => void;
}

export function Card({title, link, type, onClick}: CardProps) {
    return <div> 
        <div className="bg-gray-100 outline-slate-200 p-4 max-w-70 border-1 border-purple-600 rounded-md shadow-xl inset-shadow-sm inset-shadow-purple-200">
            <div className="flex">
                <div className="flex items-center justify-end">
                    <div className="pr-2 text-gray-700">
                    </div>
                    {title}
                </div>
                <div className="flex items-center pr-1 text-gray-600 cursor-pointer ml-auto">
                    <div>
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div onClick={onClick} className="flex items-center pl-3">
                    <CrossIcon />
                    </div>
                </div>
               
            </div>

            <div className="pt-4">
                {type === "youtube" &&  
                    <iframe 
                        className="w-full" 
                        src={link.replace("watch", "embed").replace("?v=", "/")} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    ></iframe> }
                
                {type === "twitter" && <blockquote 
                    className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}
            </div>
        </div>
    </div>
}