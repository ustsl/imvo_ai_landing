import styles from './logoComponent.module.css'
import icon from './icon.svg'

import Link from 'next/link'
import Image from 'next/image'

export const LogoComponent = () => {
    return (
        <Link className={styles.block} href="/">
            <Image src={icon} width={50} height={50} alt={'IMVO GPT'} />
            <span>IMVO AI</span>
        </Link>

    )
}