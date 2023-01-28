import styles from './card.module.css';


import clockIcon from '@/public/assets/icons/timer.svg';
import knifeIcon from '@/public/assets/icons/fork-knife.svg';
import likeIcon from '@/public/assets/icons/like.svg';
import featuredAdsImage from '@/public/assets/images/featured-ads.svg';
import Button from '../Button/Button';

const Card = ({ type="primary", title, featureImg, timerTxt, typeTxt, marginBottom }) => {
    if (type == "primary")
        return (
            <div className={styles.cardContainer} style={{marginBottom}}>
                <div className={styles.cardImg}>
                    <img src={featureImg.src} alt="card-image" className={styles.cardFeatureImg} />
                    <div className={styles.likeIcon}>
                        <img src={likeIcon.src} alt="like-icon" />
                    </div>
                </div>
                <h1>{title}</h1>
                <div className={styles.cardIcons}>
                    <Button
                        type="secondary"
                        text={timerTxt}
                        icon={clockIcon}
                        width="6.68rem"  
                        bgcolor='#E7FAFE'                  
                    />
                    <Button
                        type="secondary"
                        text={typeTxt}
                        icon={knifeIcon}
                        width="6.68rem"  
                        bgcolor='#E7FAFE'                  
                    />
                </div>
            </div>
        )
    else if (type == "featured")
        return (
            <div className={styles.featuredContainer}>
                <img src={featuredAdsImage.src} alt="featured-image" />
            </div>
        )
}

export default Card