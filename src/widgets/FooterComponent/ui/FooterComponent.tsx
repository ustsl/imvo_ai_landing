import styles from './FooterComponent.module.css'


import { OpenAILogo } from "@/shared/OpenAI"

export const FooterComponent = () => {
    return (
        <div className={styles.block}>
            <OpenAILogo />
        </div>


    )
}