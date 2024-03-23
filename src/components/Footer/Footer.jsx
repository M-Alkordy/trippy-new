import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="top">
                <div className="left">
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div className="social">
                    <i className='fa-brands fa-facebook-square'></i>
                    <i className='fa-brands fa-instagram-square'></i>
                    <i className='fa-brands fa-behance-square'></i>
                    <i className='fa-brands fa-twitter-square'></i>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h2>Project</h2>
                    <p>Changelog</p>
                    <p>Status</p>
                    <p>License</p>
                    <p>All Versions</p>
                </div>
                <div>
                    <h2>Community</h2>
                    <p>GitHub</p>
                    <p>Issues</p>
                    <p>Project</p>
                    <p>Twitter</p>
                </div>
                <div>
                    <h2>Help</h2>
                    <p>Support</p>
                    <p>Troubleshooting</p>
                    <p>Contact us</p>
                </div>
                <div>
                    <h2>Others</h2>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>License</p>
                </div>
            </div>
        </footer>
    )
}
