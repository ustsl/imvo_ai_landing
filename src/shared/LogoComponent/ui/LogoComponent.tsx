import styles from './LogoComponent.module.css';
import Image from 'next/image';
import logo from './logo.svg';

export const LogoComponent = () => {
    return (
        <Image
            src={logo}
            alt="Logo"
            className={styles.logo}
            width={150}
            height={0}
            style={{ height: 'auto' }}
        />
    );
};
