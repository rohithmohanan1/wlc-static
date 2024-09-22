import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-350%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 25,
        },
    },
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div 
                className="textContainer" 
                variants={textVariants} 
                initial="initial" 
                animate="animate"
            >
                <motion.h2 variants={textVariants}>Be the best of yourself with WLC</motion.h2>
                <motion.h1 variants={textVariants}>WE CARE,<br /> WE TRANSFORM</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>Book a free Demo</motion.button>
                </motion.div>
                <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Language, Culture, Life, Intercultural
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="hero image" />
        </div>
    </div>
  )
}

export default Hero
