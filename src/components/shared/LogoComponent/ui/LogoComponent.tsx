import styles from './logoComponent.module.css'
import icon from './icon.svg'

import Image from 'next/image'

export const LogoComponent = () => {
    return (
        <div className={styles.block}>
            <Image src={icon} width={50} height={50} alt={'IMVO GPT'} />
            <span>IMVO AI</span>
        </div>

    )
}