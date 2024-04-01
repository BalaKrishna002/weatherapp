

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <h4>Made with 💗 by Bala Krishna Makineni</h4>
            <div className="social-icons">
                <a href="https://github.com/BalaKrishna002" target="_blank" rel="noopener" className="social-icon github" role="button">
                <i className="fab fa-github" aria-hidden="true"></i> 
                </a>
                <a href="https://www.linkedin.com/in/balakrishna-makineni/" target="_blank" rel="noopener" className="social-icon linkedin" role="button">
                <i className="fab fa-linkedin" aria-hidden="true"></i> 
                </a>
                <a href="https://medium.com/@balakrishna-02" target="_blank" rel="noopener" className="social-icon medium" role="button">
                <i className="fab fa-medium" aria-hidden="true"></i> 
                </a>
                <a href="https://www.instagram.com/balakrishna__02/" target="_blank" rel="noopener" className="social-icon instagram" role="button">
                <i className="fab fa-instagram" aria-hidden="true"></i> 
                </a>  
            </div>
        </footer>
    )
}

export default Footer;
