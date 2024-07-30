import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                From the earliest memories, technology has been the compass guiding my curiosity and fueling my passion. The intricate dance of logic and creativity that it embodies has always fascinated me. I am captivated by the endless possibilities that technology and innovation present, the problems they solve, and the doors they open. The thrill of exploring new tech trends, the joy of unraveling complex algorithms, and the satisfaction of turning innovative ideas into reality - these are the things that keep my passion for technology burning brightly. This passion is not just about understanding the existing tech landscape but also about contributing to it, about being a part of the wave that shapes the future. For me, technology is not just a field of study, it’s a way of life. It’s my passion, my calling, and my lifelong commitment to innovation and progress.
                </p>
                <p>
                Hi, my name is  
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About