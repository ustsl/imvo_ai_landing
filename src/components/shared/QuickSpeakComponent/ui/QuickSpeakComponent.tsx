import styles from './quickSpeakComponent.module.css';

export const QuickSpeakComponent = ({ quickId }: { quickId: string }) => {
    return (
        <div className={styles.quick}>
            <iframe src={`https://qsbot.app/${quickId}`} height="700" width="100%" ></iframe>
        </div >
    )
}