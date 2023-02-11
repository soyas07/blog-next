import React from 'react';
import styles from './text.module.css';

const TextField = ({ title, placeholder, width }) => {
    return (
        <div className={styles.textFieldContainer} style={{width}}>
            <h1>{title}</h1>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default TextField