import React from 'react'
import ReactDom from 'react-dom'
import { Card } from 'react-bootstrap'
import './modal.css'

const Modal = ({ data, close, open }) => {
    
    if (!open) return null
    console.log(data)

    return ReactDom.createPortal(
        <React.Fragment>
            <div className="Modal" />
            <div className="Overlay">
                <div className="Overlay-card">
                {
                    data ? data.map((each, i) => (
                        <Card className="card" key={i}>
                            <Card.Img className="card-img" variant="top" src={each.img} />
                        </Card>
                    )) : null
                }
                </div>
                <a className="card-button" onClick={close} >close</a>
            </div>
        </React.Fragment>,
        document.getElementById("portal")
    )
}

export default Modal;