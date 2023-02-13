import React from 'react';
import styles from './pagination.module.css';
import forwardIcon from '@/public/assets/icons/forward.svg';

export const PaginationBtn = () => {
    return <button className={`${styles.paginationBtn} ${styles.neutral}`}>{
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="5" height="14" viewBox="0 0 5 14" fill="none">
        <path d="M1 1V1C4.31371 4.31371 4.31371 9.68629 1 13V13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>}</button>
}

const Pagination = () => {
    const list = [1, 2, 3, 4, 5, '...'];

    return (
        <div className={styles.paginationContainer}>
            {list.map((item,key) => {
                return <button className={key===0 ? `${styles.pageBtn} ${styles.active}` : `${styles.pageBtn} ${styles.neutral}`}>{item}</button>
            })}
            <PaginationBtn />
        </div>
    )
}

export default Pagination