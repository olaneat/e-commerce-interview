import React, {useState} from "react";
import Style from './style.module.css'
import { Link } from "react-router-dom";
import { WhatsAppIcon, AndroidIcon, AppleIcon, EmailIcon, PhoneIcon } from "../icons/icons";

const Footer = ()=>{
    const [email, setEmail] = useState('')
    
    const subscribe = ()=>{
        console.log(email)
        //e.preventDefault()

    } 
    return (
        <div className={`${Style.body}`}>
            <div className={`${Style.container} `}>
                <div className="container">
                    <div  className={` row`}>
                        <div className={`${Style.contact} col-lg-2 col-md-2 col-sm-12`}>
                            <span className={`${Style.iconSpan}`}>
                                <EmailIcon className={`${Style.icons}`}/>
                            </span>
                            <div className={`${Style.iconDiv}`}>
                                <p className={`${Style.iconTxt}`}>EMAIL SUPPORT</p>
                                <p className={`${Style.iconTxt}`}>info@neatstorez.com</p>
                            </div>
                        </div>
                        <div className={`${Style.contact} col-lg-2 col-md-2 col-sm-12`}>
                            <span className={`${Style.iconSpan}`}>
                                <PhoneIcon className={`${Style.icons}`}/>
                            </span>
                            <div className={`${Style.iconDiv}`}>
                                <p className={`${Style.iconTxt}`}>Phone SUPPORT</p>
                                <p className={`${Style.iconTxt}`}>07065300100</p>
                            </div>
                        </div>
                        <div className={`${Style.contact} col-lg-2 col-md-2 col-sm-12`}>
                            <span className={`${Style.iconSpan}`}>
                                <WhatsAppIcon className={`${Style.icons}`}/>
                            </span>
                            <div className={`${Style.iconDiv}`}>
                                <p className={`${Style.iconTxt}`}>WhatsApp</p>
                                <p className={`${Style.iconTxt}`}>07065300100</p>
                            </div>
                        </div>
                        <div className={`${Style.getDiv} col-lg-3 col-md-3 col-sm-12`}>
                            <h2 className={`${Style.get}`}>GET LATEST DEALS</h2>
                            <p className={`${Style.best}`}>Our best promotion sent to your mail</p>
                            <div></div>
                        </div>
                        <div className={`${Style.subscribe} col-lg-3 col-md-3 col-sm-12`}>
                            <input 
                                type="email"
                                value={email}
                                name="email"
                                onChange={e=>setEmail(e.target.value)}
                            />
                            <button className={`${Style.subscribe} btn btn-success`} onClick={subscribe}>Subscribe</button>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className={`${Style.otherInfoBg}`}>
                <div className={`container ${Style.lowerConatiner}`}>
                    <div className="row"> 
                    <div className={`${Style.about} col-lg-2 col-md-2 col-sm-12` }>
                        <h4 className={`${Style.heading}`}>ABOUT NEATSTOREZ </h4>
                        <Link className={`${Style.link}`}><p>Contact Us</p></Link>
                        <Link className={`${Style.link}`}><p>About Us</p></Link>
                        <Link className={`${Style.link}`}><p>Our Forum</p></Link>
                        <Link className={`${Style.link}`}><p>Terms & Conditions</p></Link>
                    </div>
                    <div className={`${Style.payment} col-lg-2 col-md-2 col-sm-12` }>
                        <h4 className={`${Style.heading}`}>PAYMENT</h4>
                        <Link className={`${Style.link}`}><p>Wallet</p></Link>
                        <Link className={`${Style.link}`}><p>Verve</p></Link>
                        <Link className={`${Style.link}`}><p>MasterCard</p></Link>
                        <Link className={`${Style.link}`}><p>Visa</p></Link>
                    </div>
                    <div className={`${Style.buying} col-lg-2 col-md-2 col-sm-12` }>
                        <h4 className={`${Style.heading}`}>BUYING ON NEATSTOREZ</h4>
                        <Link className={`${Style.link}`}><p>FAQs</p></Link>
                        <Link className={`${Style.link}`}><p>Digital Services</p></Link>
                        <Link className={`${Style.link}`}><p>Delivery</p></Link>
                        <Link className={`${Style.link}`}><p>Neatstorez Return Policy</p></Link>
                        <Link className={`${Style.link}`}><p>Buyer Safety Center</p></Link>
                        
                    </div>
                    <div className={`${Style.more} col-lg-2 col-md-2 col-sm-12` }>
                        <h4 className={`${Style.heading}`}>MORE INFO</h4>
                        <Link className={`${Style.link}`}><p>Site Map</p></Link>
                        <Link className={`${Style.link}`}><p>Track My Order</p></Link>
                        <Link className={`${Style.link}`}><p>Privacy Policy</p></Link>

                    </div>
                   
                    <div className={`${Style.connect} col-lg-4 col-md-4 col-sm-12` }>
                        <h4 className={`${Style.heading}`}> DOWNLOAD AND CONNECT WITH US</h4>
                        <div className={Style.download}>
                            <div className={Style.appleicon}>
                                <AppleIcon className={Style.downloadicon}/>
                                <div>
                                    <p className={Style.appletxt}>Download on</p>
                                    <h4 className={Style.appletxt} >APP Store</h4>
                                </div>
                            </div>
                            <div className={Style.appleicon}>
                                <AndroidIcon className={Style.downloadicon}/>
                                <div>
                                    <p className={Style.appletxt}>Download on</p>
                                    <h4 className={Style.appletxt}>Google Play</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer