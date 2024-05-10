import { PiNumberCircleFourFill } from "react-icons/pi";
import { FaGithub, FaSquareXTwitter, FaReact } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer sm:grid flex sm:justify-between justify-center sm:items-center p-4 bg-neutral sm:text-neutral-content">
                <aside className="items-center grid-flow-col">
                    {<PiNumberCircleFourFill className="w-6 h-6" />}
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="flex sm:grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="https://github.com/myabdi4" target="_blank" rel="noopener noreferrer" className="cursor-pointer"> {<FaGithub className="w-6 h-6" />}</a>
                    <a href="https://twitter.com/nurabdirahman4" target="_blank" rel="noopener noreferrer" className="cursor-pointer"> {<FaSquareXTwitter className="w-6 h-6" />}</a>
                    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="cursor-pointer"> {<FaReact className="w-6 h-6" />}</a>
                </nav>
            </footer>
        </>
    )
}

export default Footer;