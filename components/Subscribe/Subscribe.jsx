import styles from './subscribe.module.css';
import salad from '@/public/assets/images/salad.svg';
import plate from '@/public/assets/images/plate.svg';
import Button from '../Button/Button';

const Subscribe = () => {
    return (
        <div className={styles.subscribeContainer}>
            <div className={styles.subscribeTitles}>
                <h1>Deliciousness to your inbox</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <input type="text" placeholder='Your email address..' alt="subscribe" />
                <div className={styles.subscribeBtn}>
                    <Button 
                        type="primary"
                        text="Subscribe"
                        width="10rem"
                    />
                </div>
            </div>
            <div className={styles.subscribeBgImage}>
                <img src={salad.src} className={styles.saladImg}  alt="salad" />
                <img src={plate.src} className={styles.plateImg} alt="salad" />
            </div>
        </div>
    )
}

export default Subscribe