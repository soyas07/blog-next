import Header from '@/components/Header/Header';
import Article from '@/components/Article/Article';
import React from 'react';
import styles from './blog.module.css';
import Recipe from '@/components/Recipe/Recipe';

import adImg from '@/public/assets/images/featured-ads.svg';

const Blog = () => {
    const articleList = [1, 2, 3, 4, 5];
    const recipeList = [1, 2, 3];

    return (
        <div className={`${styles.blogContainer} main-container`}>
            <div class={styles.header}>
                <Header
                    title="Blog & Article"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    placeholder="Search article, news or recipe..."
                    margin="6rem"
                />
            </div>
            <div className={styles.recipeContainer}>
                <div className={styles.article}>
                    {articleList.map(() => <Article margin="2rem" />)}
                </div>
                <div className={styles.recipes}>
                    <h1>Tasty Recipes</h1>
                    {recipeList.map(() => <Recipe margin="1rem" />)}
                    <img className={styles.adImage} src={adImg.src} alt="ad-image" width="100%" />
                </div>
            </div>
            <div className={styles.pagination}></div>
            <div className={styles.subscribe}></div>
        </div>
    )
}

export default Blog