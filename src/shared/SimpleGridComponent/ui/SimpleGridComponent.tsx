import { ReactNode } from 'react';
import styles from './SimpleGridComponent.module.css';

type Props = {
    children: ReactNode;
    className?: string;
};

export const SimpleGridComponent = ({ children, className }: Props) => {
    return (
        <div className={`${styles.grid} ${className || ''}`}>
            {children}
        </div>
    );
};
