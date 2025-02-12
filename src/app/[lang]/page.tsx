import translate from './page.translate.json';
import { FlexBetweenWrapper } from "@/components/shared/FlexBetweenWrapper";
import { GridBlock } from "@/components/shared/GridBlock";
import { LinkButton } from "@/components/shared/LinkButton";
import { OpenAILogo } from "@/components/shared/OpenAI";
import { TitleBlock } from "@/components/shared/TitleElement";
import { QuickSpeak } from '@/components/widgets/QuickSpeak';
import { baseLanguages } from "@/types/baseTypes";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params
}: {
  params: { lang: baseLanguages }
}): Promise<Metadata> {

  const t = translate[params.lang] || translate['en'];
  return {
    title: t.metadata.title,
    description: t.metadata.description
  };
}

export default async function Home({
  params
}: {
  params: { lang: baseLanguages }
}) {

  const lang = params?.lang ? params.lang : 'en';
  const t = translate[lang] || translate['en'];

  return (
    <FlexBetweenWrapper>
      <GridBlock gridSize="M">
        <TitleBlock text={t.title} tag="h1" theme="light" />
        <p>{t.paragraph}</p>
        <QuickSpeak lang={lang} />
        <Link href="https://ustsl.ru">{t.link}</Link>
        <OpenAILogo />
      </GridBlock>
      <LinkButton text={t.button} href="https://t.me/imvo_prompt_bot" />
    </FlexBetweenWrapper>
  );
}
