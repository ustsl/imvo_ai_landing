import Link from 'next/link';
import styles from './GradientLinkButton.module.css';

type Variant = 'gradient' | 'metal';

type GradientLinkButtonProps = {
    href: string;
    text: string;
    variant?: Variant;
    className?: string;
    blank?: true
};

export const GradientLinkButton = ({
    href,
    text,
    variant = 'gradient',
    className,
    blank,
}: GradientLinkButtonProps) => {
    return (
        <Link
            href={href}
            className={`${styles.button} ${styles[variant]} ${className || ''}`}
            target={blank && `_blank`}
        >
            {text}
        </Link>
    );
};
