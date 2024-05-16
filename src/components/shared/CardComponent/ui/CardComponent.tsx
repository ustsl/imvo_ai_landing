import classNames from 'classnames';
import styles from './cardComponent.module.css'

export const CardComponent =
    ({ content, color }: { content: string, color: 'green' | 'blue' | 'violet' | 'grey' }) => {

        const cardStyle = classNames(styles.card, {
            [styles[`${color}Color`]]: color
        });

        return (
            <div className={cardStyle} dangerouslySetInnerHTML={{ __html: content }} />
        )
    }