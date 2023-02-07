import Button from '@/components/Button/Button';
import playIcon from '@/public/assets/icons/play.svg';
import timerIcon from '@/public/assets/icons/timer.svg';
import forkKnifeIcon from '@/public/assets/icons/fork-knife.svg';
import recipesIcon from '@/public/assets/icons/hot-recipes.svg';
import heroImg from '@/public/assets/images/hero.svg';
import badgeIcon from '@/public/assets/icons/badge.svg';

import styles from './herobox.module.css';
import Author from '../Author/Author';

const HeroBox = ({ author }) => {
    const IMG_ADD = "https://storage.googleapis.com/foodieland-blog-bucket";
    
    return (
        <div className={styles.heroboxContainer}>
            <div className={styles.leftBox}>
                <Button 
                    type="feature"
                    text="Hot Recipes"
                    icon={recipesIcon}
                />
                <h1>{author[0].title}</h1>
                <p>{author[0].subtitle}</p>
                <div className={styles.recipeBtnContainer}>
                    <Button 
                        type="secondary"
                        text={author[0].cook_time}
                        icon={timerIcon} 
                        width="8.68rem"
                        bgcolor='rgba(0,0,0,0.05)'
                    />
                    <Button 
                        type="secondary"
                        text={author[0].dish}
                        icon={forkKnifeIcon} 
                        width="10.43rem"
                        bgcolor='rgba(0,0,0,0.05)'
                    />
                </div>
                <div className={styles.authorRecipeContainer}>
                    <Author
                        name={author[0].name}
                        picture={`${IMG_ADD}/featured-images/author/${author[0].author_img}`}
                        createdDate="15 March 2022"
                    /> 
                    <Button 
                        type="primary"
                        text="View Recipes"
                        icon={playIcon} 
                        width="12.5rem"
                    />
                </div>
            </div>
            <div className={styles.rightBox}>
                <img src={`${IMG_ADD}/featured-images/recipe-post/${author[0].featured_image}`} alt="recipe-feature" width="100%" height="100%" />
            </div>
            <div className={styles.badgeIconContainer}>
                <img src={badgeIcon.src} className={styles.badgeIcon} alt="recipe batch" />
            </div>
        </div>
    )
}

export default HeroBox