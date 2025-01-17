import React, {useEffect, useState} from 'react'
import "./Navbar.css"



function Navbar() {
    const [show, setShow] = useState(false)

    useEffect(() => {
    
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300){
                setShow(true)
            } else {
                setShow(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])
    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" alt="netflix icon"/>
            <img className="navbar__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="user icon"/>
        </div>
    )
}

export default Navbar
