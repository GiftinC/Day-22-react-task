import "./Footer.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-1" style={{paddingLeft:"80px"}}>
                        <a className="links" href="http://">About</a>
                        <span className="links">.</span>
                        <a className="links" href="http://">Contact</a>
                        <span className="links">.</span>
                        <a className="links" href="http://">Terms of Use</a>
                        <span className="links">.</span>
                        <a className="links" href="http://">Privacy Policy</a>
                        <p style={{marginTop:"5px"}}>© Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-2" style={{textAlign:"end"}}>
                    <i className="fa fa-facebook-official" aria-hidden="true" style={{fontSize:30}}></i>
                    <i className="fa fa-twitter" aria-hidden="true" style={{fontSize:30}}></i>
                    <i className="fa fa-instagram" aria-hidden="true" style={{fontSize:30}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;