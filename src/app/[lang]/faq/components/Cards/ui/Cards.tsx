import { CardComponent } from "@/components/entities/CardComponent"
import { CardsWrapper } from "@/components/shared/CardsWrapper"

import img0 from './img/0.png'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import img8 from './img/8.png'
import img9 from './img/9.png'
import img10 from './img/10.png'
import img11 from './img/11.png'

export const Cards = ({ faq }: { faq: any }) => {

    const content = [
        { title: faq.p1.title, text: faq.p1.description, image: img0 },
        { title: faq.p2.title, text: faq.p2.description, image: img1 },
        { title: faq.p3.title, text: faq.p3.description, image: img2 },
        { title: faq.p4.title, text: faq.p4.description, image: img3 },
        { title: faq.p5.title, text: faq.p5.description, image: img4 },
        { title: faq.p6.title, text: faq.p6.description, image: img5 },
        { title: faq.p7.title, text: faq.p7.description, image: img6 },
        { title: faq.p8.title, text: faq.p8.description, image: img7 },
        { title: faq.p9.title, text: faq.p9.description, image: img8 },
        { title: faq.p10.title, text: faq.p10.description, image: img9 },
        { title: faq.p11.title, text: faq.p11.description, image: img10 },
        { title: faq.p12.title, text: faq.p12.description, image: img11 },
    ]


    return (
        <CardsWrapper>
            {content.map((item, index) => {
                const title = `${index + 1}. ${item.title}`
                return (
                    <CardComponent key={index} title={title} text={item.text} image={item.image} />
                )
            })}

        </CardsWrapper>
    )
}