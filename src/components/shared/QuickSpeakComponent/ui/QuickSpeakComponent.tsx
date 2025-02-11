import styles from './quickSpeakComponent.module.css';

export const QuickSpeakComponent = ({ quickId }: { quickId: string }) => {
    return (
        <div className={styles.quick}>
            <iframe src={`https://app.qspk.me/${quickId}`} ></iframe>
        </div >
    )
}