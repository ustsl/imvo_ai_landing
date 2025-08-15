import styles from './openAILogo.module.css'

import logo from './logo.webp'
import Image from 'next/image'


export const OpenAILogo = () => {
    return (
        <div className={styles.block}>
            <Image src={logo} width={20} height={20} alt="ChatGPT OpenAI" />
            <span>Powered by OpenAI</span>
        </div>

    )
}