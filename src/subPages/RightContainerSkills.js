import React from 'react'
import { Card, Button } from 'react-bootstrap'

import zdravko from '../img/zdravko400px.png'
import './projects.css'

const projects = [
    {   title: "zdravko",
        url: "https://szajc.github.io/med/",
        desc: "Mobile application - developed using: Ionic, React, Node.js, Firebase, javaScript, HTML, CSS, ..."
    },
    {   title: "scheduler",
        url: "https://szajc.github.io/med/",
        desc: "Mobile application - developed using: Ionic, React, Node.js, Firebase, javaScript, HTML, CSS, ..."
    },
    {   title: "MERN stack",
        url: "https://szajc.github.io/med/",
        desc: "Web application - developed using: MongoDB, Express, React, Node.js, javaScript, HTML, CSS"
    }
]

export default function RightContainerSkills() {
    return (
        <section className="section-skills" id="skills/projects">
            <div className="inner-skills" >
                <h2>SPRETNOSTI</h2>
                <div className="exp-set-skills">
                    
                    <div className="exp-heading">
                        <div className="sub-heading bm10">PROGRAMSKI JEZIKI IN ORODJA</div>
                    </div>
                    <div className="social-icons-bot">
                        <a className="soc-img-bot" >
                            <i className="fab fa-node-js"></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-react"></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-html5"></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-css3-alt" ></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-js-square" ></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-sass" ></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-adobe" ></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-wordpress"></i>
                        </a>
                    </div>

                    <div className="sub-heading tm30">Moji projekti</div>
                    <div className="projects">
                    {
                        projects.map(project => (
                            <Card style={{ width: '250px' }} key={project.title}>
                                <Card.Img variant="top" src={zdravko} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.desc}</Card.Text>
                                    <Button variant="primary" >Link</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}
