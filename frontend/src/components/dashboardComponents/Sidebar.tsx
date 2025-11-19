import axios from "axios";
import { BrianIcon } from "../../icons/BrianIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideItem } from "./SideItem";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

export function Sidebar() {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const deleteShareLink = async () => {
        try {
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/v1/brain/share`, {
                share: false
            }, {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            });
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
        } catch (error) {
          console.error("Error deleting share link:", error);
          alert("Failed to remove access.");
        }
    };

    return <div className="h-screen b-white border-r-2 border-slate-300 w-72 fixed left-0 top-0  pt-4 pl-8">
        <div onClick={() => {
            navigate("/dashboard");
        }} className="flex text-3xl font-medium pb-10 items-center cursor-pointer transition delay-100 duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:translate-z-1 hover:scale-110">
            <BrianIcon />
            <div className="pl-3 font-coda">
                BRAINLY
            </div>
        </div>

        <div>
            <div className="hover:bg-purple-200 hover:inset-ring-2 hover:inset-ring-purple-600 focus:outline-2 rounded-xl focus:outline-offset-2 focus:outline-violet-500 active:bg-purple-600 ">
                <SideItem onClick={() => {
                    navigate("/dashboard/tweets");
                }} text="Tweets" icon={<TwitterIcon />} />
            </div>
            <div className="pt-2 pl-0.5 hover:bg-purple-200 hover:inset-ring-2 hover:inset-ring-purple-600 rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-purple-600">
                <SideItem onClick={() => {
                    navigate("/dashboard/youtube");
                }} text="YouTube" icon={<YoutubeIcon />} />
            </div>
            <div className="mt-100">
                <Button onClick={deleteShareLink} variant="secondary" text="Disable brain link" />
            </div>
            <div className="mt-4">
                <Button onClick={() => {
                    localStorage.clear();
                    navigate("/");
                }} variant="primary" text="Log out" />
            </div>

            {/* popup alert */}
            {showPopup && (
                <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
                    URL disabled!
                </div>
            )}
        </div>
        
    </div>
}