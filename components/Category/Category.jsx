import React from 'react';

import styles from './category.module.css';
import breakfastIcon from '@/public/assets/icons/breakfast.svg';
import veganIcon from '@/public/assets/icons/vegan.svg';
import meatIcon from '@/public/assets/icons/meat.svg';
import dessertIcon from '@/public/assets/icons/dessert.svg';
import lunchIcon from '@/public/assets/icons/lunch.svg';
import chocolateIcon from '@/public/assets/icons/chocolate.svg';
import Button from '../Button/Button';

const Category = () => {
    const list = [
        {
            name: 'Breakfast',
            icon: breakfastIcon,
        }, 
        {
            name: 'Vegan',
            icon: veganIcon, 
        },
        {
            name: 'Meat',
            icon: meatIcon,
        },
        {
            name: 'Dessert',
            icon: dessertIcon,
        },
        {
            name: 'Lunch', 
            icon: lunchIcon,
        },
        {
            name: 'Chocolate',
            icon: chocolateIcon
        }
    ];

    const categories = [
        {backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(112, 130, 70, 0.1))"},
        {backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(108, 198, 63, 0.1))"},
        {backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(204, 38, 27, 0.1))"},
        {backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(240, 158, 0, 0.1))"},
        {backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.1))"},
        {backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.1))"}
    ];

    const shadow = [
        {filter: "drop-shadow(30px 10px 4px rgba(112, 130, 70, 0.1))"},
        {filter: "drop-shadow(30px 10px 4px rgba(108, 198, 63, 0.1))"},
        {filter: "drop-shadow(30px 10px 4px rgba(204, 38, 27, 0.1))"},
        {filter: "drop-shadow(30px 10px 4px rgba(240, 158, 0, 0.1))"},
        {filter: "drop-shadow(30px 10px 4px rgba(240, 158, 0, 0.1))"},
        {filter: "drop-shadow(30px 10px 4px rgba(204, 38, 27, 0.1))"},
    ]

    return (
        <div>
            <div className={styles.categoryTitleContainer}>
                <h2>Categories</h2>
                <Button 
                    text="View All Categories"
                    bgcolor="#E7FAFE"
                    width="12.5rem"
                    type="primary"
                    color="black"
                />
            </div>
            <div className={styles.categoryHolder}>
                {list.map((item,key) => (
                    <div key={key} className={styles.categoryContainer} style={categories[key]}>
                        <img src={item.icon.src} alt="breakfast" style={shadow[key]} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category