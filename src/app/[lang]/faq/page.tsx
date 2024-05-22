

import { getDictionary } from "@/dictionaries/serverDictionary";

import { Metadata } from "next";

import { Cards } from "./components/Cards";
import { BaseContainer } from "@/components/shared/BaseContainer/ui/BaseContainer";
import { LinkButton } from "@/components/shared/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { TitleBlock } from "@/components/shared/TitleElement";


export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  let lang = params.lang ? params.lang : 'ru'
  const { faq } = await getDictionary(lang)
  return {
    title: faq.metaTitle,
    description: faq.metaDescription
  }
}


export default async function Home({
  params
}: {
  params: { lang: any }
}) {
  const lang = params.lang ? params.lang : 'en'
  const { faq, button } = await getDictionary(lang)
  return (
    <BaseContainer>
      <TitleBlock tag="h1" text={faq.title} />
      <Cards faq={faq} />
      <LinkButton href={"https://t.me/imvo_prompt_bot"}
        text={button.button}
        icon={<FontAwesomeIcon icon={faTelegram} width={30} height={30} color="white" />} />
    </BaseContainer>
  );
}
