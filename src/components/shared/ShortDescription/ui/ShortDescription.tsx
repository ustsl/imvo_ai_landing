import styles from './shortDescription.module.css';

export const ShortDescription = ({ text, color }: { text: string, color?: "white" }) => {
    return <div className={`${styles.block} ${color && styles.colorWhite}`} dangerouslySetInnerHTML={{ __html: text }} />
}