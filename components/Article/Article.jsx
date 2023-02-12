import React from 'react';
import styles from './article.module.css';

import recipeImg from '@/public/assets/images/card.svg';
import authorImg from '@/public/assets/icons/author.svg';
import Author from '../Author/Author';

const Recipe = ({ margin }) => {
    return (
        <div className={styles.recipeContainer} style={{marginBottom:margin}}>
            <div className={styles.leftContent}>
                <img src={recipeImg.src} alt="recipe" width="100%" height="100%" />
            </div>
            <div className={styles.rightContent}>
                <h1>Crochet Projects for Noodle Lovers</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                <div className={styles.authorConatainer}>
                    <Author 
                        name="Wade Warren"
                        picture={authorImg.src}
                    />
                    <div className={styles.verticleLine}></div>
                    <span>12 November 2021</span>
                </div>
            </div>
        </div>
    )
}

export default Recipe