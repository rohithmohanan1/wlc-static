import './service.scss'
import { motion } from 'framer-motion'

const Service = () => {
  return (
    <div className='service'>
      
      <motion.div className="titleContainer">
        <div className="title">
            <h1><b>Our Services</b></h1>
        </div>
      </motion.div>
      <div className="listContainer">
        <motion.div className="box" whileHover={{scale: 1.1}}>
            <img src="/ielts.jpg" alt="" />
            <h2>IELTS</h2>
            <p>
                At WLC, our IELTS training programs are tailored for all proficiency levels, 
                from beginners to those with prior language training. Opt for our comprehensive 
                40-hour course or our condensed 25-hour program to refine your skills. Get fully 
                prepared to excel on test day.
            </p>
        </motion.div>
        <motion.div className="box" whileHover={{scale: 1.1}}>
            <img src="/german.jpg" alt="" />
            <h2>German</h2>
            <p>
                Our tailored German training programs suit all levels, from beginner to advanced. 
                Led by certified instructors, our engaging lessons enhance listening, speaking, reading, 
                and writing skills, ensuring comprehensive learning.
            </p>
        </motion.div>
        <motion.div className="box" whileHover={{scale: 1.1}}>
            <img src="/oet.jpg" alt="" />
            <h2>OET</h2>
            <p>
                Our in-house developed OET training programs cater to healthcare professionals of all levels, 
                whether you're just starting out or have prior language training. Choose between our comprehensive 
                course or condensed program to sharpen your skills. Get fully equipped to ace the OET exam.
            </p>
        </motion.div>
        <motion.div className="box" whileHover={{scale: 1.1}}>
            <img src="/comm.jpg" alt="" />
            <h2>Communicative English</h2>
            <p>
                Communicative English training programs are crafted for individuals at every proficiency level, 
                whether you're a novice or have some background in language learning. Select from our comprehensive 
                course or condensed program to hone your skills. Get ready to confidently communicate in English.
            </p>
        </motion.div>
        <motion.div className="box" whileHover={{scale: 1.1}}>
            <img src="/corpo.jpg" alt="" />
            <h2>Corporate Trainings</h2>
            <p>
                Our Corporate Training programs are tailored to meet the diverse needs of businesses at every level. 
                Choose from our comprehensive course or condensed program to equip your team with essential skills. 
                Elevate your corporate communication prowess with us.
            </p>
        </motion.div>
        <motion.div className="box" whileHover={{scale: 1.1}}>
            <img src="/school.jpg" alt="" />
            <h2>Trainig for Schools</h2>
            <p>
                For schools, our training programs are designed to cater to various educational needs. We offer 
                tailored courses and workshops aimed at enhancing student learning experiences. Choose from our 
                range of programs to empower your school community with valuable skills and knowledge
            </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Service
