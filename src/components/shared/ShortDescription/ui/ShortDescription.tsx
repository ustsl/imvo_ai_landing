import styles from './shortDescription.module.css';

export const ShortDescription = ({ text }: { text: string }) => {
    return <p className={styles.block} dangerouslySetInnerHTML={{ __html: text }} />
}