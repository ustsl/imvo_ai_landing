
import styles from "./page.module.css";
import { ColoredTitle } from "@/components/shared/ColoredTitle";
import { ShortDescription } from "@/components/shared/ShortDescription";
import { LinkButton } from "@/components/shared/LinkButton";
import { QuickSpeakComponent } from "@/components/shared/QuickSpeakComponent";
import { CardComponent } from "@/components/shared/CardComponent";
import { GridBlock } from "@/components/shared/GridBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { getDictionary } from "@/dictionaries/serverDictionary";
import { Locale } from "../../../i18n.config";
import { Metadata } from "next";


export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  let lang = params.lang ? params.lang : 'ru'
  const { meta } = await getDictionary(lang)
  return {
    title: meta.title,
    description: meta.description
  }
}


export default async function Home({
  params
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang ? params.lang : 'en'
  const { landing, button, advantages } = await getDictionary(lang)
  return (
    <main className={styles.main}>
      <GridBlock gridSize={'S'}>
        <ColoredTitle header={landing.title} subheader={landing.subtitle} />
        <ShortDescription
          text={landing.lead} />

        <div className={styles.buttons}>

          <LinkButton href={"https://t.me/imvo_prompt_bot"}
            text={button.button}
            icon={<FontAwesomeIcon icon={faTelegram} width={30} height={30} color="white" />} />

        </div>
      </GridBlock>
      <div className={styles.cards}>
        <CardComponent
          content={advantages.a}
          color="green" />
        <CardComponent
          content={advantages.b}
          color="grey" />
        <CardComponent
          content={advantages.c}
          color="blue" />
      </div>

      <QuickSpeakComponent quickId={`imvo-ai-${lang}`} />
      <ShortDescription
        text={landing.description} />
      <div className={styles.buttons}>

        <LinkButton href={"https://t.me/imvo_prompt_bot"}
          text={button.button}
          icon={<FontAwesomeIcon icon={faTelegram} width={30} height={30} color="white" />} />

      </div>
    </main>
  );
}
