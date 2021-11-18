import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="d-block text-center bg-secondary text-light fw-bold">
                <p className="p-3">&copy; copyright <Link style={{textDecoration: "none", color: "inherit"}} to="./../esquireyusuf.ml">Esq.Yusuf</Link> {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer
