"use client"

import { useEffect, useState } from 'react'
import { baseLanguages } from '@/types/baseTypes'
import translate from './translate.json'
import styles from './quickSpeak.module.css'

import { faComputerMouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const QuickSpeak = ({ lang }: { lang: baseLanguages }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const locale = translate[lang];

    const toggleModal = () => setModalOpen(!isModalOpen);


    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    return (
        <>
            <div className={styles.next} onClick={toggleModal}>
                <div className={styles.text}
                    dangerouslySetInnerHTML={{ __html: locale.about }} />
                <FontAwesomeIcon icon={faComputerMouse} width={50} height={50} />
            </div>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.quick}>
                        <button className={styles.closeButton} onClick={toggleModal}>✕</button>
                        <iframe src={`https://app.qspk.me/${locale.quickId}`} ></iframe>
                    </div >
                </div>
            )}
        </>
    )
}
