import Header from '@/components/Header/Header';
import Article from '@/components/Article/Article';
import React from 'react';
import styles from './blog.module.css';

const Blog = () => {
    const recipeList = [1, 2, 3, 4, 5];

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
                    {recipeList.map((recipe) => <Article margin="2rem" />)}
                </div>
                <div className={styles.recipes}></div>
            </div>
            <div className={styles.pagination}></div>
            <div className={styles.subscribe}></div>
        </div>
    )
}

export default Blog