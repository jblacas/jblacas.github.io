import { useContext } from 'react';
import { CursorContext } from '../cursor.context';
import { GithubOutlined, LinkedinOutlined, MailOutlined, PushpinFilled } from '@ant-design/icons';

export function About() {

    const { onLinkEntered, onLinkExited } = useContext(CursorContext);

    return (
        <div className="py-6 text-justify">
            <h1 className='text-2xl font-bold'>A few words about me...</h1>
            <p className='my-4 text-lg'>
                👋 Hello! I'm Julien Blacas, a passionate and experienced fullstack web developer with a Master's degree in MIAGE from Nice Sophia Antipolis.
                With over 8 years of dedicated experience in the world of web development, I've had the opportunity to work with a diverse range of technologies including React, Angular, NodeJS, and NestJS.
            </p>

            <p className='mb-4 text-lg'>
                🚀 My journey in web development has been a thrilling ride, and I take pride in my fullstack capabilities - whether it's crafting an engaging frontend user experience or architecting a robust backend system.
                I thrive on challenges and enjoy diving into various aspects of development. While I have experience in contributing to the integration and continuous deployment of projects, I'm continuously learning in this area to ensure that the final product is not only functional but also as seamless as possible in its execution.
            </p>

            <p className='mb-4 text-lg'>
                💡 Attention to detail is my mantra. I'm committed to writing clean, maintainable code, and I firmly believe in the power of unit testing and creating exceptional user experiences. My journey has been diverse, having worked both in dynamic startups and established corporations. This exposure has given me a well-rounded perspective, allowing me to adapt and excel in various work environments.
            </p>

            <p className='mb-4 text-lg'>
                I'm excited to bring my skills, dedication, and passion for web development to your projects. If you're looking for a developer who can bridge the gap between frontend and backend, prioritize code quality, and deliver impactful digital solutions, let's connect and explore the possibilities!
            </p>

            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <h1 className='text-xl font-bold'>Contact</h1>
            <ul>
                <li><MailOutlined className="font-bold text-2xl mr-2" /> <a onMouseEnter={onLinkEntered} onMouseLeave={onLinkExited} className="font-medium text-sky-600 dark:text-sky-500 hover:underline" href="mailto:julienblacas@gmail.com">julienblacas@gmail.com</a></li>
                <li><LinkedinOutlined className="font-bold text-2xl mr-2"/><a target="_blank" onMouseEnter={onLinkEntered} onMouseLeave={onLinkExited} className="font-medium text-sky-600 dark:text-sky-500 hover:underline" href="https://www.linkedin.com/in/julienblacas/">https://www.linkedin.com/in/julienblacas</a></li>
                <li><GithubOutlined className="font-bold text-2xl mr-2" /> <a target="_blank" onMouseEnter={onLinkEntered} onMouseLeave={onLinkExited} className="font-medium text-sky-600 dark:text-sky-500 hover:underline" href="https://github.com/jblacas">https://github.com/jblacas</a></li>
                <li><PushpinFilled className="font-bold text-2xl mr-2" /> <a target="_blank" onMouseEnter={onLinkEntered} onMouseLeave={onLinkExited} className="font-medium text-sky-600 dark:text-sky-500 hover:underline" href="https://www.google.com/maps/place/06480+La+Colle-sur-Loup">La colle-sur-loup ( near Nice )</a></li>
            </ul>

        </div>
    )
}