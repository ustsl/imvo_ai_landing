import { OpenAILogo } from '@/components/shared/OpenAI'
import styles from './header.module.css'

import { LogoComponent } from "@/components/shared/LogoComponent"
import { LanguageSwitcher } from '@/components/features/LanguageSwitcher'

export const Header = () => {
    return (
        <div className={styles.block}>
            <LogoComponent />
            <LanguageSwitcher />
        </div>
    )
}