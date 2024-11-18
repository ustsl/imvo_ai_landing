import styles from './coloredTitle.module.css';

export const ColoredTitle = ({ header, subheader }: { header: string, subheader: string }) => {
    return (
        <div className={styles.block}>
            <h1>{header}</h1>
            <span>{subheader}</span>
        </div>
    )
}