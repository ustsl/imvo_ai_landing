import { ReactNode } from 'react';
import styles from './ContainerComponent.module.css';

type ContainerComponentProps = {
    children: ReactNode;
    className?: string;
};

export const ContainerComponent = ({ children, className }: ContainerComponentProps) => {
    return (
        <div className={`${styles.container} ${className || ''}`}>
            {children}
        </div>
    );
};
