import React from 'react';
import styles from '../Module/Categories.module.css';

import Cameras from '/images/Categories/Cameras.png';
import Computers from '/images/Categories/Computers.png';
import Gaming from '/images/Categories/Gaming.png';
import Headphones from '/images/Categories/Headphones.png';
import Phones from '/images/Categories/Phones.png';
import SmartWatches from '/images/Categories/SmartWatches.png';

export default function Categories() {
    const categories = [
        { name: 'Cameras', icon: Cameras },
        { name: 'Computers', icon: Computers },
        { name: 'Gaming', icon: Gaming },
        { name: 'Headphones', icon: Headphones },
        { name: 'Phones', icon: Phones },
        { name: 'Smart Watches', icon: SmartWatches },
    ];

    return (
        <div className={styles.categoriesContainer}>
            <h2 className={styles.categoryTitle}>Browse by category</h2>
            <div className={styles.categoryGrid}>
                {categories.map((category, index) => (
                    <div key={index} className={styles.categoryItem}>
                        <img src={category.icon} alt={category.name} className={styles.categoryIcon} />
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
