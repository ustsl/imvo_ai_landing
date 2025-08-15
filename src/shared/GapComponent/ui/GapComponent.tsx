import { ReactNode } from 'react';
import styles from './GapComponent.module.css';
import { BaseSize, baseSizes } from '@/app/types/base';

type Props = {
    children: ReactNode;
    gap?: BaseSize;
    className?: string;
};

export const GapComponent = ({ children, gap = 'M', className }: Props) => {
    return (
        <div
            className={`${styles.gapWrapper} ${className || ''}`}
            style={{ gap: baseSizes[gap] }}
        >
            {children}
        </div>
    );
};
