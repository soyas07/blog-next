import React from 'react';
import styles from './recipe.module.css';

import recipeImg from '@/public/assets/images/card.svg';

const Recipe = ({ margin }) => {
    return (
        <div className={styles.recipeContainer} style={{marginBottom:margin}}>
            <div className={styles.recipeLeftContent}>
                <img src={recipeImg.src} alt="" width="100%" height="100%" />
            </div>
            <div className={styles.recipeRightContent}>
                <h1>Chicken Meatballs with Cream Cheese </h1>
                <p>By Andreas Paula</p>
            </div>
        </div>
    )
}

export default Recipe