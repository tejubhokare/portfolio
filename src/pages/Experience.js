import React from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="2014 - 2017"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> Dr. Babasaheb Ambedkar Technological University, Lonere (India)</h3>
                    <p>Diploma in Information Technology Engineering</p>
                    <p>University Gold Medalist with CGPA of 9.3 out of 10</p>
                    <p>Coursework: C Programming, Computer Networks and Secuirty, Database Management Systems</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="2017- 2020"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> College of Engineering, Pune (India)</h3>
                    <p>Bachelor of Technology in Information Technology Engineering</p>
                    <p>Coursework: Web Development, Object Oriented Programming, Software Engineering Concepts, Quality Analysis</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work"
                    date="2020 - 2023"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title"> Bajaj Finserv, Pune (India)</h3>
                    <p> Software Engineer</p> <p>Oct 2020 - Oct 2023</p>
                    <p>In my three years of experience as a full stack developer at Bajaj Finserv, I've utilized my computer science engineering skills to deliver innovative solutions. <br />
                        Proficient in TypeScript, JavaScript, HTML, CSS/SASS, and node.js, I've contributed to projects using React, Redux, Next.js, and Express.js. My toolkit includes Webpack, Jest, React Testing Library, GitHub, WordPress, Figma, and Tailwind, ensuring efficient development processes. <br />
                        By implementing Google Cloud Platform, CircleCI, Docker, and Kubernetes, I played a pivotal role in achieving a 20% improvement in project scalability and a 15% reduction in deployment time. <br />
                        My expertise in database management with MongoDB and MySQL resulted in a 25% enhancement in data retrieval efficiency. These achievements highlight my comprehensive skill set in delivering impactful and measurable outcomes.

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work"
                    date="2023"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<FlightLandOutlinedIcon />}>
                    <h3 className="vertical-timeline-element-title"> Immigrated to Canada as Permanant Residence)</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}

export default Experience
