import styles from './cards.module.css'

import btc from './images/btc.png'
import cat from './images/cat.png'
import code from './images/code.png'
import interfaceimg from './images/interface.jpg'
import recognition from './images/recognition.png'
import sets from './images/sets.png'

import { CardComponent } from '@/components/shared/CardComponent'

import { baseLanguages } from '@/types/baseTypes'
import { getDictionary } from '@/dictionaries/clientDictionary'


export const Cards = ({ lang }: { lang: baseLanguages }) => {
    const { advantages } = getDictionary(lang)
    return (
        <div className={styles.cards}>
            <div className={styles.col}>

                <CardComponent
                    content={advantages.a}
                    color="blue"
                    image={btc} />
                <CardComponent
                    content={advantages.b}
                    color="grey"
                    image={sets} />
                <CardComponent
                    content={advantages.c}
                    color="dark"
                    image={cat} />
            </div>
            <div className={styles.col}>
                <CardComponent
                    content={advantages.d}
                    color="grey"
                    image={recognition} />
                <CardComponent
                    content={advantages.e}
                    color="dark"
                    image={code} />
                <CardComponent
                    content={advantages.f}
                    color="blue"
                    image={interfaceimg} />
            </div>
        </div>

    )
}