import styles from './navbar.module.css';
import logo from '@/public/assets/icons/logo.svg';
import facebookIcon from '@/public/assets/icons/facebook.svg';
import instagramIcon from '@/public/assets/icons/instagram.svg';
import twitterIcon from '@/public/assets/icons/twitter.svg';

const Navbar = () => {
    const navlink = ['Home', 'Recipes', 'Blog', 'Contact', 'About us'];
    const socialMediaLink = [facebookIcon, twitterIcon, instagramIcon];

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
        </div>
    )
}

export default Navbar