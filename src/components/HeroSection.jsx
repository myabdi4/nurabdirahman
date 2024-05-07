import profileImage from '../../dist/profile.jpg'
import { FaGithub, FaSquareXTwitter, FaReact } from "react-icons/fa6";

const heroSectionclean = () => {
    return (
        <>
            {/* HERO SECTION */}
            <div className='p-6 sm:flex justify-center'>
                <div className='grid sm:flex sm:gap-10 justify-center'>
                    <div className="sm:card sm:w-[310px] sm:w-[448px] bg-base-100 shadow-x">
                        <figure className='image-zoom'><img src={profileImage} alt="Shoes" className='.image-zoom rounded-lg cursor-pointer'/></figure>
                    </div>
                    <div className="sm:card sm:w-[310px] sm:w-[448px] bg-base-100 shadow-xl pb-10">
                        <div className="sm:card-body p-3">
                            <h2 className="sm:card-title text-center pt-5">ABDIRAHMAN NUR</h2>
                            <p className='pt-5 text-justify sm:text-lg'>Hello, I am a front-end developer and an aspiring back-end developer,
                                my interests are mostly in web development. You can find both my projects and my
                                blogs here. Have fun! This portfolio is constantly expanding, as I add more blogs and
                                projects.
                            </p>
                            <div className='flex justify-center pt-5'>
                                {/* MY SOCIALS */}
                                <ul className="menu menu-horizontal rounded-lg bg-black">
                                    <li><a><FaGithub className='w-6 h-6' /></a></li>
                                    <li><a><FaSquareXTwitter className='w-6 h-6' /></a></li>
                                    <li><a><FaReact className='w-6 h-6' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default heroSectionclean;