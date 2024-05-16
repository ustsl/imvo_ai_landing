import styles from './footerComponent.module.css';
import ava from './ava.png';
import Image from 'next/image';
import Link from 'next/link';
import { LogoComponent } from '@/components/shared/LogoComponent';

export const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <LogoComponent />
                </div>

                <div className={styles.column}>
                    <Link href="/policy.pdf">Privacy Policy</Link>
                    <Link href="mailto:w@imvo.site">w@imvo.site</Link>
                </div>
            </div>
        </footer>
    )
}