import profileImage from '../../dist/profile.jpg'
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const heroSectionclean = () => {
    return (
        <>
            {/* HERO SECITON */}
            <div className='p-4 md:flex gap-10 px-14 justify-center pb-2'>
                <div className="sm:card w-[310px] sm:w-[448px] bg-base-100 shadow-xl">
                    <figure><img src={profileImage} alt="Shoes" className='rounded-lg' /></figure>
                </div>
                <div className="sm:card w-[310px] sm:w-[448px] bg-base-100 shadow-xl pb-10">
                    <div className="sm:card-body">
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

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default heroSectionclean;