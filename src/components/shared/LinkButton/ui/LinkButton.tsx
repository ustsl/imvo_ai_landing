import classNames from 'classnames';
import styles from './linkButton.module.css';
import Link from "next/link"


interface LinkButton {
    href: string
    text: string;
    light?: true
    icon?: React.ReactNode
}

export const LinkButton = ({ href, text, light, icon }: LinkButton) => {
    const buttonClasses = classNames(styles.button, {
        [styles.light]: light
    });

    return (
        <Link href={href} className={buttonClasses}>{icon && icon} <span>{text}</span></Link>
    )
}