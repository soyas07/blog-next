import styles from './footer.module.css';

import logo from '@/public/assets/icons/logo.svg';
import facebookIcon from '@/public/assets/icons/facebook.svg';
import instagramIcon from '@/public/assets/icons/instagram.svg';
import twitterIcon from '@/public/assets/icons/twitter.svg';

const Footer = () => {
    const list = ['Recipes', 'Blog', 'Contact', 'About us'];
    const socialMediaLink = [facebookIcon, twitterIcon, instagramIcon];

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTitles}>
                <div className={styles.footerLeft}>
                    <img src={logo.src} alt="foodieland" />
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
                </div>
                <ul>
                    {list.map((item,key) => <li key={key}>{item}</li>)}
                </ul>
            </div>
            <hr />
            <div className={styles.footerSocialMedia}>
                <h2>&copy; 2023 FoodieLand. Powered by <span>NextJS</span></h2>
                <div className={styles.footerSocialList}>
                    {socialMediaLink.map((item,index) => (
                        <img key={index} src={item.src} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer