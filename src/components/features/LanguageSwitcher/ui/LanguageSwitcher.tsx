'use client'

import { useParams, usePathname } from 'next/navigation';

import styles from './languageSwitcher.module.css';
import { baseLanguages } from '@/types/baseTypes';

import Link from 'next/link'

import { LanguageButton } from './components/LanguageButton';
import { useEffect, useRef, useState } from 'react';

import { languageList } from '@/const';


export const determineCurrentLangPrefix = (languageList: string[], currLang: string): baseLanguages => {
    if (languageList.includes(currLang)) {
        return currLang as baseLanguages;
    }
    return 'ru';
}


export const LanguageSwitcher = () => {

    const params = useParams();
    const pathname = usePathname();
    const lang = params.lang as baseLanguages;
    const [menuVisible, setMenuVisible] = useState(false);
    const filteredLanguages = languageList.filter(langItem => langItem !== lang);
    const switchBlockRef = useRef<HTMLDivElement | null>(null);


    const path = pathname.slice(3)

    useEffect(() => {
        setMenuVisible(false)
        const handleClickOutside = (event: { target: any; }) => {
            if (switchBlockRef.current && !switchBlockRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);


    useEffect(() => {
        setMenuVisible(false)
    }, [pathname])

    const renderLanguageButtons = () => {
        return filteredLanguages.map(langItem => {
            if (languageList.includes(lang)) {
                return (
                    <Link key={langItem} href={`/${langItem}${path}`}>
                        <LanguageButton language={langItem as baseLanguages} />
                    </Link>
                );
            }
            return null;
        });
    }

    const handleLangMenu = () => {
        setMenuVisible(prevState => !prevState);
    }
    return (
        <div ref={switchBlockRef} className={styles.switchBlock}>
            <nav className={`${styles.langMenu} ${menuVisible ? styles.active : ''}`}>
                {renderLanguageButtons()}
            </nav>
            <div className={styles.reveal}>
                <LanguageButton language={determineCurrentLangPrefix(languageList, lang)} onClick={handleLangMenu} />
            </div>
        </div>
    )
}

