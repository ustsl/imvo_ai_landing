import styles from './GradientTitleComponent.module.css';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';

type Props = {
    text: string;
    as?: Tag;
    className?: string;
};

export const GradientTitleComponent = ({ text, as = 'h2', className }: Props) => {
    const TagName = as;
    return (
        <TagName className={`${styles.title} ${className || ''}`}>
            {text}
        </TagName>
    );
};
