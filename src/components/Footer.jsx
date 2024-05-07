import { PiNumberCircleFourFill } from "react-icons/pi";
import { FaGithub, FaSquareXTwitter, FaReact } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer items-center p-4 bg-neutral sm:text-neutral-content">
                <aside className="items-center grid-flow-col">
                    {<PiNumberCircleFourFill className="w-8 h-8" />}
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a className="cursor-pointer"> {<FaGithub className="w-6 h-6" />}</a>
                    <a className="cursor-pointer"> {<FaSquareXTwitter className="w-6 h-6" />}</a>
                    <a className="cursor-pointer"> {<FaReact className="w-6 h-6" />}</a>
                </nav>
            </footer>
        </>
    )
}

export default Footer;