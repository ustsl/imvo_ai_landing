import React from 'react';
import styles from './imageScreen.module.css';
import bgImage from './image.webp';

export const ImageScreenWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={styles.block}
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            {children}

        </div>
    );
};
