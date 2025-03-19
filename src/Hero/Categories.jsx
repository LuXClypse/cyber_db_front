import React from "react";
import styles from "../Module/Categories.module.css";

const categories = [
    { name: "Phones", icon: "📱" },
    { name: "Smart Watches", icon: "⌚" },
    { name: "Cameras", icon: "📷" },
    { name: "Headphones", icon: "🎧" },
    { name: "Computers", icon: "🖥️" },
    { name: "Gaming", icon: "🎮" },
];

export default function Categories() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Browse By Category</h2>
            <div className={styles.categories}>
                {categories.map((category) => (
                    <div key={category.name} className={styles.categoryCard}>
                        <span className={styles.icon}>{category.icon}</span>
                        <p className={styles.text}>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
