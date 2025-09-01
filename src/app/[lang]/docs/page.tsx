import translate from './page.translate.json';
import styles from './page.module.css'
import { ContainerComponent } from "@/shared/ContainerComponent";
import { GapComponent } from "@/shared/GapComponent";
import { GradientCardComponent } from "@/shared/GradientCardComponent";
import { GradientTitleComponent } from "@/shared/GradientTitleComponent";
import { PComponent } from "@/shared/PComponent/ui/PComponent";
import { SimpleGridComponent } from "@/shared/SimpleGridComponent";
import { baseLanguages } from '@/app/types/base';

// Примеры API из вашего ТЗ (оставил «токен» как в описании)
const promptApiExample = `
POST https://imvo.qspk.me/v1/queries/id
Headers: { "Authorization": "token", "Content-Type": "application/json" }
Body:
{
  "prompt_id": "промпт",
  "query": "your text query"
}
`.trim();

const scenarioApiExample = `
POST https://imvo.qspk.me/v1/queries/id/scenario
Headers: { "Authorization": "token", "Content-Type": "application/json" }
Body:
{
  "scenario_id": "сценарий",
  "query": "your text query"
}
`.trim();



export default async function Page(
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

      {/* Карточки преимуществ (если есть блок benefits — выведем его как карточки) */}
      {Array.isArray(t.blocks) && t.blocks.some((b) => b.id === 'benefits') && (
        <GapComponent>
          <SimpleGridComponent>
            {(t.blocks.find((b) => b.id === 'benefits')?.text ?? '')
              .split('\n')
              .filter((s: string) => s.trim().length > 0)
              .map((line: string, i: number) => (
                <GradientCardComponent key={i} title={line.replace(/^•\s?/, '')} />
              ))}
          </SimpleGridComponent>
        </GapComponent>
      )}

      {/* Основные секции */}
      {Array.isArray(t.blocks) && t.blocks
        .filter((b) => b.id !== 'benefits')
        .map((block) => (
          <GapComponent key={block.id}>
            <h3>{block.title}</h3>

            <PComponent>{block.text}</PComponent>

            {/* Вставляем код-блоки для API секций */}
            {block.id === 'apiPrompt' && (
              <pre className={styles.scenario}>
                {promptApiExample}
              </pre>
            )}
            {block.id === 'apiScenario' && (
              <pre className={styles.scenario}>
                {scenarioApiExample}
              </pre>
            )}
          </GapComponent>
        ))}
    </ContainerComponent>
  );
}
