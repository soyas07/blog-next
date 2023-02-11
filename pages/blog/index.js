import React from 'react';
import styles from './blog.module.css';

const Blog = () => {
    return (
        <div class={`${styles.blogContainer} main-container`}>
            <div class={styles.header}></div>
            <div class={styles.article}></div>
            <div class={styles.recipes}></div>
            <div class={styles.pagination}></div>
            <div class={styles.subscribe}></div>
        </div>
    )
}

export default Blog