import { Button } from "../dashboardComponents/Button"; 
import { useNavigate } from "react-router-dom"
import { BrianIcon } from "../../icons/BrianIcon";

export function Navbar() {
    const navigate = useNavigate();

    return <div>
        <div className="flex justify-between pt-3 px-10 ">
            <div onClick={() => {
                    navigate("/");
                }} className="flex text-3xl font-medium pl-4 pb-5 pt-1 items-center font-coda">
                <BrianIcon />
                <div className="pl-4">
                    BRAINLY
                </div>
            </div>
            <div className=" flex pt-1 pr-4 gap-2">
                <div className="pr-4">
                    <Button onClick={async() =>  {
                        navigate("/signup");
                    }} variant="secondary" text="Signup" />
                </div>
                <div>
                    <Button onClick={async() =>  {
                        navigate("/signin");
                    }} variant="secondary" text="Signin" />
                </div>       
            </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-300" />
        </div>
}