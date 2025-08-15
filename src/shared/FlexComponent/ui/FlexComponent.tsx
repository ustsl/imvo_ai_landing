'use client';

import { ReactNode } from 'react';
import styles from './FlexComponent.module.css';
import { BaseSize, baseSizes } from '@/app/types/base';


type FlexProps = {
    children: ReactNode;
    gap?: BaseSize;
    direction?: 'row' | 'column';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    className?: string;
};

export const FlexComponent = ({
    children,
    gap = 'M',
    direction = 'row',
    justify = 'flex-start',
    align = 'stretch',
    className,
}: FlexProps) => {
    return (
        <div
            className={`${styles.flex} ${className || ''}`}
            style={{
                gap: baseSizes[gap],
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
            }}
        >
            {children}
        </div>
    );
};
