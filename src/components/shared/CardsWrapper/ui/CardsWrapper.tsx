import styles from './cardsWrapper.module.css'

export const CardsWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.cards}>
            {children}
        </div>
    )
}