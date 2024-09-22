import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span 
            initial={{opacity: 0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration: 0.5 }}
        >
            WLC
        </motion.span>
        <div className="socials">
            <a href="https://www.facebook.com/"><img src="/facebook.png" alt="facebook" /></a>
            <a href="https://www.facebook.com/"><img src="/instagram.png" alt="instagram" /></a>
            <a href="https://www.facebook.com/"><img src="/dribbble.png" alt="dribble" /></a>
            {/* <a href="https://www.facebook.com/"><img src="/facebook.png" alt="facebook" /></a> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
