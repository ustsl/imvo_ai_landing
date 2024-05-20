import styles from './baseContainer.module.css'

export const BaseContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}