import styles from './flexBetweenWrapper.module.css'

export const FlexBetweenWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}