import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './about.scss'
import { useRef } from 'react'

const items = [
    {
        id: 1,
        title: "What make us different?",
        img: "/diff.jpg",
        desc: "For the 1st time in India, WLC is introducing language skills sessions induced with multi- cultural learning. We have different tastes and interests, why not have our own language identity! Talk to us today for more guidance. We would like to guide you through for free of cost!"
    },
    {
        id: 2,
        title: "What is WLC-SEP?",
        img: "/what.jpg",
        desc: "The Student Enrichment Program is created for students who are about to finish their college education and start their professional journey. Most of the students are confused and unaware of the preparations they might have to do to kick start their career in a global setting. It is indeed one of WLC's goals to create global speakers who can survive (THRIVE) on their own in an international work setting. We believe that it is best to groom them young to make them productive members of reputed organizations around the world. We have research-oriented methodologies to gain maximum international exposure to the student communities in India"
    },
    {
        id: 3,
        title: "Highest transformation rate…",
        img: "/trans.png",
        desc: "We are an MSME registered establishment with the sole aim of promoting easy language acquisition programs. WLC thrives and works towards becoming the ultimate destination for all your language needs. From cognitive language acquisition programs for school going students to corporate training for companies and organisations. We would like to hold your hand throughout your transformational journey!"
    },
    {
        id: 4,
        title: "About Us",
        img: "/about.jpg",
        desc: "Wilfreeda's Language Centre is a futuristic language centre intending to further grow as a linguistics research centre. We are proud to say that we have more than 1000 satisfied students in just one year from our commencement of operations. Our institution is named after the late Mrs. Wilfreeda Patric who has proved herself as an efficient English trainer for more than 35 years. Our methodologies are adapted from her simple form of classroom discourses and are backed up with research-oriented results from research conducted by our founder Mr. Shinoj John. Our methods are flexible and adaptive for the students to actively participate in them and eventually achieve their language goals."
    }
    
]

const Single = ({item}) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({target: ref})

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])


    return (
        <section id='About Us'>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </motion.div>
                </div>
            </div>
            
        </section>
    )
}

const About = () => {

    const ref = useRef()
    
    const { scrollYProgress } = useScroll({target: ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30})

    return (
        <div className='about' ref={ref}>
            <div className="progress">
                <h1>What is WLC.?</h1>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default About
