import translate from './page.translate.json';
import { ContainerComponent } from "@/shared/ContainerComponent";
import { GapComponent } from "@/shared/GapComponent";
import { GradientCardComponent } from "@/shared/GradientCardComponent";
import { GradientTitleComponent } from "@/shared/GradientTitleComponent";
import { PComponent } from "@/shared/PComponent/ui/PComponent";
import { QuickSpeakComponent } from "@/shared/QuickSpeakComponent";
import { SimpleGridComponent } from "@/shared/SimpleGridComponent";
import { baseLanguages } from '../types/base';

export default async function Home(
  { params }: { params: Promise<{ lang: baseLanguages }> }
) {
  const { lang } = await params;
  const t = translate[lang] ?? translate.en;

  return (
    <ContainerComponent>
      <GapComponent>
        <GradientTitleComponent text={t.title} as="h1" />
        <PComponent>{t.desc}</PComponent>
      </GapComponent>

      <SimpleGridComponent>
        {t.cards.map((card, idx) => (
          <GradientCardComponent
            key={idx}
            title={card.title}
            text={card.text}
            styleType={idx % 2 === 1 ? "metal" : "gradient"}
          />
        ))}
      </SimpleGridComponent>

      <QuickSpeakComponent quickId={`imvo-ai-${lang ? lang : 'en'}`} />
    </ContainerComponent>
  );
}
