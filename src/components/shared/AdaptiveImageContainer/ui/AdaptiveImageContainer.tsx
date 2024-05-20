import styles from './adaptiveImageContainer.module.css';

import Image, { StaticImageData } from 'next/image';

interface IAdaptiveImageContainer {
    image: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
    radius?: true;
}

export const AdaptiveImageContainer = ({ image, alt, width, height, radius }: IAdaptiveImageContainer) => {
    return (
        <div className={`${styles.imageContainer} ${radius && styles.radius}`}>
            <Image src={image} alt={alt} width={width} height={height} quality={98} className={`${radius && styles.radius}`} />
        </div>
    )
}