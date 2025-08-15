import { ReactNode } from 'react';
import styles from './PComponent.module.css';

type Props = {
    children: ReactNode;
    className?: string;
};

export const PComponent = ({ children, className }: Props) => {
    return <p className={`${styles.p} ${className || ''}`}>{children}</p>;
};
