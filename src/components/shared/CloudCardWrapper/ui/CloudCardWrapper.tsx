import styles from './cloudCardWrapper.module.css'

export const CloudCardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}