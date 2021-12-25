import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="d-block text-center bg-secondary text-light fw-bold">
                <h6 className="p-3">&copy; copyright <a href="http://esquireyusuf.ml">Esq.Yusuf</a> {new Date().getFullYear()}</h6>
            </div>
        </footer>
    )
}

export default Footer
