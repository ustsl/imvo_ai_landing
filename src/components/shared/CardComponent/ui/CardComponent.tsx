import styles from './cardComponent.module.css'

import Image, { StaticImageData } from 'next/image'

import classNames from 'classnames';



interface CardComponent {
    content: string;
    color: 'green' | 'blue' | 'violet' | 'grey' | 'yellow' | 'dark'
    image: string | StaticImageData
}

export const CardComponent =
    ({ content, color, image }: CardComponent) => {

        const cardStyle = classNames(styles.card, {
            [styles[`${color}Color`]]: color
        });

        return (
            <div className={cardStyle}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className={styles.image}>
                    <Image src={image} width={250} height={250} alt="GPT Telegram" />
                </div>
            </div >

        )
    }