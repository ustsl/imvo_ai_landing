
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
import { VideoContainer } from "@/components/shared/VideoContainer";
import { BaseContainer } from "@/components/shared/BaseContainer/ui/BaseContainer";
import Link from "next/link";
import { Cards } from "@/components/widgets/Cards";



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
  const { landing, button } = await getDictionary(lang)
  return (
    <BaseContainer>
      <GridBlock gridSize={'M'}>
        <ColoredTitle header={landing.title} subheader={landing.subtitle} />

        <ShortDescription
          text={landing.lead} />

        <div className={styles.buttons}>

          <LinkButton href={"https://t.me/imvo_prompt_bot"}
            text={button.button}
            icon={<FontAwesomeIcon icon={faTelegram} width={30} height={30} color="white" />} />

          <Link className={styles.link} href={`/${lang}/faq`}>{button.manual}</Link>

        </div>
      </GridBlock>
      <Cards lang={lang} />

      <QuickSpeakComponent quickId={`imvo-ai-${lang}`} />
      <ShortDescription
        text={landing.description} />
      <VideoContainer video={"https://www.youtube.com/embed/7l8jlwp8314?si=YUI0B2PwqFb1jjxx"} />

      <LinkButton href={"https://t.me/imvo_prompt_bot"}
        text={button.button}
        icon={<FontAwesomeIcon icon={faTelegram} width={30} height={30} color="white" />} />

    </BaseContainer>
  );
}
