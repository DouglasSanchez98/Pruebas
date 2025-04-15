import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { AiFillFacebook } from "react-icons/ai"

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/douglas-sanchez-pardo-5688a0145/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/DouglasSanchez98?tab=repositories',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:jrdouglas98@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href:'https://streamus-my.sharepoint.com/:b:/g/personal/douglassanchezpardo_streamus_onmicrosoft_com/EUiWy3uxGhxJqkThzs3jH9MB3QYxW8yZYEA9_ziCTjoLTQ?e=L70UhD',
            style: 'rounded-br-md',
            
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed bg-slate-900 rounded-md'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + "" + style}>
                        <a href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer">
                           
                               {child}
                            
                        </a>
                    </li>

                ))}

            </ul>

        </div>
    )
}

export default SocialLinks
