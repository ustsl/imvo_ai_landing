import styles from './videoContainer.module.css';

export const VideoContainer = ({ video }: { video: string }) => {
    return (
        <section className={styles.container}>
            <div className={styles.block}>
                <iframe src={video} />
            </div>
        </section>


    )
}