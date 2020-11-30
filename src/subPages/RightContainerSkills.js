import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { projects } from '../dataArrays/skillsData';

import Modal from '../modals/Modal';

import './projects.css'

export default function RightContainerSkills() {

    const [isOpen, setIsOpen] = useState(false);
    const [getProject, setGetProject] = useState();

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isOpen ? 'hidden' : 'auto';
      }, [isOpen])

    const openModal = (selectedProject) => {
        setIsOpen(true);
        setGetProject(selectedProject)
    }

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
                        {
                        //<a className="soc-img-bot" >
                        //    <i className="fab fa-sass" ></i>
                        //</a>
                        }
                        <a className="soc-img-bot" >
                            <i className="fab fa-adobe" ></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-wordpress"></i>
                        </a>
                        <a className="soc-img-bot" >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                    <div className="sub-heading tm30">Moji projekti</div>
                    <div className="projects">
                    {
                        projects.map(project => (
                            <Card style={{ width: '250px' }} key={project.title}>
                                <Card.Img variant="top" src={project.img} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.desc}</Card.Text>
                                    <div className="buttons-divider">
                                    {
                                        project.url ? <a href={project.url} target="_blank">Link</a> : null
                                    }
                                    {
                                        project.info ? <a onClick={() => openModal(project)}>Info</a> : null
                                        // in modal bellow paste all the things from project.info...
                                    }
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                    
                        <Modal 
                            close={() => setIsOpen(false)} 
                            data={getProject && getProject.detailedInfo} 
                            open={isOpen} 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
