import Link from 'next/link';
import styles from './GradientLinkButton.module.css';

type Variant = 'gradient' | 'metal';

type GradientLinkButtonProps = {
    href: string;
    text: string;
    variant?: Variant;
    className?: string;
};

export const GradientLinkButton = ({
    href,
    text,
    variant = 'gradient',
    className,
}: GradientLinkButtonProps) => {
    return (
        <Link
            href={href}
            className={`${styles.button} ${styles[variant]} ${className || ''}`}
            target="_blank"
        >
            {text}
        </Link>
    );
};
