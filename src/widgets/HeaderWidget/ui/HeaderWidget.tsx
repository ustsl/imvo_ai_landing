import translate from './HeaderWidhet.translate.json';
import { baseLanguages } from '@/app/types/base';
import styles from './HeaderWidget.module.css';
import { FlexComponent } from "@/shared/FlexComponent";
import { GradientLinkButton } from '@/shared/GradientLinkButton';
import { LogoComponent } from "@/shared/LogoComponent";
import { SloganComponent } from "@/shared/SloganComponent";

export const HeaderWidget = ({ lang }: { lang: baseLanguages }) => {
    const t = translate[lang];

    return (
        <div className={styles.header}>
            <div className={styles.block}>
                <FlexComponent align="flex-end">
                    <LogoComponent />
                    <SloganComponent />
                </FlexComponent>
                <FlexComponent>
                    <GradientLinkButton href="https://ustsl.ru" text={t.help} variant="metal" />
                    <GradientLinkButton href="https://t.me/imvo_prompt_bot" text={t.go_to_constructor} />
                </FlexComponent>
            </div>
        </div>
    );
};
