// building the component which PopUp when we clicked 'Add post' button.
import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { AuthButton } from "../authComponents/AuthButton";
import axios from "axios";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose}: CreateContentModalProps) {
    const[title, setTitle] = useState("");
    const[link, setLink] = useState("");
    const[type, setType] = useState("");

    return <div>
        {open && <div>
            {/* This div acts as background opacity */}
            <div className="h-screen w-screen bg-purple-200 fixed top-0 left-0 opacity-80 flex justify-center">
            </div> 

            {/* This div addes new content */}
            <div className="h-screen w-screen fixed top-0 left-0 flex justify-center"> 
                <div className="flex flex-col justify-center">
                    <div className="bg-white opacity-100 p-4 max-w-70 border-6 border-indigo-300 rounded-md shadow-xl inset-shadow-sm inset-shadow-purple-200">
                        <div className="flex justify-between">
                                <div className="px-4 text-xl font-medium">
                                    Add Content
                                </div>
                                <div onClick={onClose} className="cursor-pointer flex justify-end">
                                    <CrossIcon />
                                </div>
                        </div>
                        <div>
                            <div>
                                <Input onChange={(e) => {
                                    setTitle(e.target.value);
                                }} placeholder={"Title"} />
                            </div>
                            <div className="-mt-4">
                                <Input onChange={(e) => {
                                    setLink(e.target.value);
                                }} placeholder={"Link"} />
                            </div>
                           
                        </div>
                        <div className="flex gap-3 justify-center items-center py-2 ">
                            <div className="transition delay-100 duration-300 ease-in-out hover:translate-y-1 hover:translate-z-1 hover:scale-110">
                                <Button text="Youtube" variant={type === ContentType.YouTube ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.YouTube);
                                }}></Button>
                            </div>
                            <div className="transition delay-100 duration-300 ease-in-out hover:translate-y-1 hover:translate-z-1 hover:scale-110">
                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Twitter);
                                }}></Button>
                            </div>
                            
                            
                        </div>
                        <div className="flex justify-center mx-2 pl-2 -mt-1">
                            <AuthButton onClick={async() => {
                                await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/dashboard/content`, {
                                    title,
                                    link,
                                    type
                                }, {
                                    headers: {
                                        Authorization: localStorage.getItem("token")
                                    }
                                });
                                onClose();
                            }} label="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </div>
}


interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}
// InputBox component
function Input({onChange, placeholder}: InputProps) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="m-4 rounded border-2 border-gray-300" onChange={onChange}></input>
    </div>
}