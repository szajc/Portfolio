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
        textHref : "about",
        text: "O meni",
        id : "ab"},
    {   
        textHref : "expirience",
        text : "izkušnje",
        id : "ex"  },
    {   
        textHref : "education",
        text : "izobrazba",
        id : "ed"  },
    {   
        textHref : "skills/projects",
        text : "spretnosti",
        id : "sk"  },
    {   
        textHref : "interests",
        text : "zanimanja",
        id : "in"  },
];

export default function Home() {

    let d = new Date();
    let n = d.getFullYear();

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
                    <small>© SZ {n}. All Rights Reserved.</small>
                </div>
            </div>
        </div>
    )
}
 