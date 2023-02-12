import Header from '@/components/Header/Header';
import React from 'react';
import styles from './blog.module.css';

const Blog = () => {
    return (
        <div class={`${styles.blogContainer} main-container`}>
            <div class={styles.header}>
                <Header
                    title="Blog & Article"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    placeholder="Search article, news or recipe..."
                />
            </div>
            <div class={styles.article}></div>
            <div class={styles.recipes}></div>
            <div class={styles.pagination}></div>
            <div class={styles.subscribe}></div>
        </div>
    )
}

export default Blog