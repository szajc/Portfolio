import React from 'react'
import NavLeftContainer from '../subPages/NavLeftContainer';
import RightContainerAbout from '../subPages/RightContainerAbout';
import RightContainerEducation from '../subPages/RightContainerEducation';
import RightContainerSkills from '../subPages/RightContainerSkills';
import RightContainerInterests from '../subPages/RightContainerInterests';
import RightContainerExpirience from '../subPages/RightContainerExpirience';

import './home.css';


const pages = [
    {   
        text : "about",
        id : "ab"},
    {   
        text : "expirience",
        id : "ex"  },
    {   
        text : "education",
        id : "ed"  },
    {   
        text : "skills/projects",
        id : "sk"  },
    {   
        text : "interests",
        id : "in"  },
];

export default function Home() {

    return (
        <div className="Container">
            <div className="Left-container">
                <NavLeftContainer pages={pages} />
            </div>
            <div className="Right-container">
                <RightContainerAbout />
                <hr className="bottom-line"></hr>
                <RightContainerExpirience />
                <hr className="bottom-line"></hr>
                <RightContainerEducation />
                <hr className="bottom-line"></hr>
                <RightContainerSkills />
                <hr className="bottom-line"></hr>
                <RightContainerInterests />
                <hr className="bottom-line"></hr>
                <div className="small">
                    <small>© SZ 2019. All Rights Reserved.</small>
                </div>
            </div>
        </div>
    )
}
 