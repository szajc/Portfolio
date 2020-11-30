import React from 'react'

export default function RightContainerAbout() {
    return (
        <section className="section-about" id="about">
            <div className="inner-about">
                <h1>STOJAN <span className="name">ZAJC</span></h1>
                <div className="sub-heading">
                    <a href="mailto:stojan_zajc@t-2.net">stojan_zajc@t-2.net</a>
                </div>
                <p>
                        Zanima me programiranje in oblikovanje spletnih strani, rad
                        spoznavam nove aplikacije, navdušujem se nad računalniškimi in drugimi tehnološkimi novostmi, in
                        nenehno sledim razvoju na tem področju. Blizu so mi programski jeziki in orodja kot so: Ionic, React, 
                        css, html, javaScript, Firebase, MongoDB.
                        Pri svojem delu uporabljam Adobe programe (Photoshop, Indesign, Illustrator), zvok in slike (Premiere, After
                        effect), trenutno pa se ukvarjam z izdelavo mobilne aplikacije (za vodenje projektov) in spletno 
                        stranjo za osebno uporabo. Prav tako se rad ukvarjam s popravilom strojne opreme
                        računalnikov, nameščanjem programov, pripravljen pa sem se tudi poglobiti v druga vprašanja in
                        nudenja pomoči, ki jo potrebujejo ljudje, ko se jim pojavijo težave povezane z računalniki.
                </p>
                <div className="social-icons">
                    <a className="soc-img" href="https://www.facebook.com/stojan.zajc1" target="_blank">
                        <i className="fab fa-facebook-f" ></i>
                    </a>
                    <a className="soc-img"  href="https://www.linkedin.com/in/stojan-zajc-a1657817a/" target="_blank">
                        <i className="fab fa-linkedin-in" ></i>
                    </a>
                    <a className="soc-img"  href="https://codepen.io/szSheep/" target="_blank">
                        <i className="fab fa-codepen"></i>
                    </a>
                    <a className="soc-img"  href="https://github.com/szajc" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}
