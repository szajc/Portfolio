import zdravko from '../img/zdravko400px.png';
import scheduler from '../img/schedulerFront.png';

import schedulerScreen1 from '../img/screen1.png';
import schedulerScreen2 from '../img/screen2.png';
import schedulerScreen3 from '../img/screen3.png';
import schedulerScreen4 from '../img/screen4.png';
import frontShop from '../img/frontShop.jpg';

export const projects = [
    {   title: "Mobile app Zdravko",
        img: zdravko,
        url: "https://szajc.github.io/med/",
        info: false, // change to array of imgs, text etc...
        desc: "Mobile application - developed using: Ionic, React, Node.js, Firebase, javaScript, HTML, CSS, ..."
    },
    {   title: "Mobile app Scheduler",
        img: scheduler,
        url: false,
        info: true,
        detailedInfo: [
            {
                img: schedulerScreen1,
                title: "Desktop of App",
            },
            {
                img: schedulerScreen2,
                title: "Receiving data",
            },
            {
                img: schedulerScreen3,
                title: "Data received and component updated",
            },
            {
                img: schedulerScreen4,
                title: "Sending email of selected data",
            },
        ],
        desc: "Mobile application - developed using: Ionic, React, Node.js, Firebase, javaScript, HTML, CSS, ..."
    },
    {   title: "MERN stack - Shop",
        img: frontShop,
        url: "https://github.com/szajc/mern-shop",
        info: false,
        desc: "Web site/app - developed using: MongoDB, Express, React, Node.js, javaScript, HTML, CSS"
    }
]