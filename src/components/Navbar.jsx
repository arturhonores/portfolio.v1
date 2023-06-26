import { Link } from "react-router-dom"
import GithubIcon from './icons/GithubIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import { motion } from "framer-motion"
import DarkLightMode from "./themechange/DarkLightMode"

const Navbar = () => {

    return (
        <div className="w-full px-4 shadow-lg h-16 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                <nav className="flex gap-x-4">
                    <Link to={"/"}>Home</Link>
                    <Link>About</Link>
                    <Link>Projects</Link>
                    <Link>Contact</Link>
                </nav>
                <nav className="flex gap-x-4 items-center">
                    <motion.a href="https://github.com/arturhonores" target="_blank"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/arturhonores/" target="blank"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}>
                        <LinkedinIcon />
                    </motion.a>
                    <DarkLightMode></DarkLightMode>
                </nav>
            </div>
        </div>
    )
}
export default Navbar