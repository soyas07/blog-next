import styles from './navbar.module.css';
import logo from '@/public/assets/icons/logo.svg';
import facebookIcon from '@/public/assets/icons/facebook.svg';
import instagramIcon from '@/public/assets/icons/instagram.svg';
import twitterIcon from '@/public/assets/icons/twitter.svg';
import navMenuIcon from '@/public/assets/icons/menu-icon.svg';
import crossMenuIcon from '@/public/assets/icons/cross.svg';

import { useState } from 'react';

const Navbar = () => {
    const navlink = ['Home', 'Recipes', 'Blog', 'Contact', 'About us'];
    const socialMediaLink = [facebookIcon, twitterIcon, instagramIcon];

    const [menu, setMenu] = useState(false);

    return (
        <div className={styles.navbarContainer}>
            <img src={logo.src} alt="foodieland" />
            <ul>
                {navlink.map((link,key) => (
                    <li key={key}>{link}</li>
                ))}
            </ul>
            <div className={styles.socialMedia}>
                {socialMediaLink.map((item,index) => (
                    <img key={index} src={item.src} />
                ))}
            </div>
            {/* mobile hamburger menu */}
            <div className={styles.mbNavMenu} onClick={() => setMenu(!menu)}> 
                <img src={navMenuIcon.src} alt="nav-menu" />
            </div>
            <div className={menu ? styles.mbMenuContainer : styles.hide}>
                <div className={styles.mbMenuItems}>
                    <img src={logo.src} alt="foodieland" />
                    <ul>
                        {navlink.map((link,key) => (
                            <li key={key}>{link}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.mbSocialMedia}>
                    {socialMediaLink.map((item,index) => (
                        <img key={index} src={item.src} />
                    ))}
                </div>
                <div className={styles.mbCrossMenu}> 
                    <img src={crossMenuIcon.src} alt="cross-menu" onClick={() => setMenu(!menu)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar