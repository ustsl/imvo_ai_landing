import styles from './LogoComponent.module.css';
import Image from 'next/image';
import logo from './logo.svg';
import Link from 'next/link';

export const LogoComponent = () => {
    return (
        <Link href="/">
            <Image
                src={logo}
                alt="Logo"
                className={styles.logo}
                width={150}
                height={0}
                style={{ height: 'auto' }}
            />
        </Link>
    );
};
