import { StaticImageData } from 'next/image'
import styles from './cardComponent.module.css'

import { AdaptiveImageContainer } from "@/components/shared/AdaptiveImageContainer"


export const CardComponent = ({ title, text, image }: { title: string, text: string, image: StaticImageData | string }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <AdaptiveImageContainer image={image} alt={""} width={300} height={250} radius />
            <p>{text}</p>
        </div>
    )
}