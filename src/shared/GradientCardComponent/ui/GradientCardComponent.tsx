import styles from './GradientCardComponent.module.css';

type CardStyle = 'gradient' | 'metal';

type GradientCardProps = {
    title: string;
    text: string;
    styleType?: CardStyle;
};

export const GradientCardComponent = ({
    title,
    text,
    styleType = 'gradient',
}: GradientCardProps) => {
    return (
        <div className={`${styles.card} ${styles[styleType]}`}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
