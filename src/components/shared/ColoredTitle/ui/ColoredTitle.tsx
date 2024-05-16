import styles from './coloredTitle.module.css';

export const ColoredTitle = ({ header, subheader }: { header: string, subheader: string }) => {
    return (
        <div className={styles.block}>
            <h1 className={styles.black}>{header}</h1>
            <p className={styles.color}><span>{subheader}</span></p>
        </div>
    )
}