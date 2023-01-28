import Button from '@/components/Button/Button';
import playIcon from '@/public/assets/icons/play.svg';
import timerIcon from '@/public/assets/icons/timer.svg';
import forkKnifeIcon from '@/public/assets/icons/fork-knife.svg';
import recipesIcon from '@/public/assets/icons/hot-recipes.svg';
import heroImg from '@/public/assets/images/hero.svg';
import badgeIcon from '@/public/assets/icons/badge.svg';

import styles from './herobox.module.css';
import Author from '../Author/Author';

const HeroBox = () => {
    return (
        <div className={styles.heroboxContainer}>
            <div className={styles.leftBox}>
                <Button 
                    type="feature"
                    text="Hot Recipes"
                    icon={recipesIcon}
                />
                <h1>Spicy delicious<br/>chicken wings</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                <div className={styles.recipeBtnContainer}>
                    <Button 
                        type="secondary"
                        text="30 Minutes"
                        icon={timerIcon} 
                        width="8.68rem"
                        bgcolor='#000'
                    />
                    <Button 
                        type="secondary"
                        text="Chicken"
                        icon={forkKnifeIcon} 
                        width="7.43rem"
                        bgcolor='#000'
                    />
                </div>
                <div className={styles.authorRecipeContainer}>
                    <Author
                        name="John Smith"
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
                <img src={heroImg.src} alt="recipe-feature" width="100%" height="100%" />
            </div>
            <div className={styles.badgeIconContainer}>
                <img src={badgeIcon.src} className={styles.badgeIcon} alt="recipe batch" />
            </div>
            {/* <br/>
            <Button 
                type="primary"
                text="Learn More" 
                width="11.25rem"
            /><br/>
            <Button 
                type="primary"
                text="View Our Instagram"
                icon={instagramIcon} 
                width="14.31rem"
            /><br/>
            <Button 
                type="primary"
                text="View All Categories"
                width="12.5rem"
                bgcolor="#E7FAFE"
                color="#000"
            /><br/>
            
            <Button 
                type="secondary"
                text="Chicken"
                icon={forkKnifeIcon} 
                width="7.43rem"
            /><br/>
            
            */}
        </div>
    )
}

export default HeroBox