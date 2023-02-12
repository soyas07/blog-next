import React from 'react';
import Button from '../Button/Button';
import styles from './header.module.css';

const Header = ({ title, subtitle, placeholder }) => {
    return (
        <div className={styles.headerContainer}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <input type="text" placeholder={placeholder} />
            <div className={styles.btnContainer}>
                <Button 
                    type="primary"
                    color="#fff"
                    bgcolor="black"
                    width="10rem"
                    text="Search"
                />
            </div>
        </div>
    )
}

export default Header