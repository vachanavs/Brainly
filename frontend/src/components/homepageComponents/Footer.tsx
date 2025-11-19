import { GitHub } from "../../icons/GitHubIcon";
import { HeartIcon } from "../../icons/HeartIcon";
import { Linkedin } from "../../icons/Linkedin";
import { MainIcon } from "../../icons/MailIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";

export function Footer() {
    return <div>
        <footer className="rounded-lg shadow-sm mt-40">
            <div className="w-full px-20 md:flex md:items-center md:justify-between">
            <span className="flex justify-center items-center text-sm pb-4 text-gray-800 sm:text-center dark:text-gray-800">@2025 Made with <HeartIcon /> by Sada. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm gap-5 font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://x.com/sada_7070?t=cv-feOIf_1NdjFMh-BNTPA&s=09" target="_blank" className="hover:underline me-4 md:me-6"><TwitterIcon/></a>
                </li>
                <li>
                    <a href="https://github.com/sada7070/" target="_blank" className="hover:underline me-4 md:me-6"><GitHub/></a>
                </li>
                <li>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sadashivamurthysp10656@gmail.com" target="_blank" className="hover:underline me-4 md:me-6"><MainIcon/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sada70/" target="_blank" className="hover:underline me-4 md:me-6"><Linkedin/></a>
                </li>
            </ul>
            </div>
        </footer>
    </div>
}