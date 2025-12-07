import type { ReactNode } from "react";

import { HeaderWidget } from "@/widgets/HeaderWidget";
import { FooterComponent } from "@/widgets/FooterComponent";
import { baseLanguages } from "../types/base";

type LangLayoutProps = {
    children: ReactNode;
    params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: LangLayoutProps) {
    const { lang } = await params;
    const resolvedLang = lang as baseLanguages;

    return (
        <>
            <HeaderWidget lang={resolvedLang} />
            {children}
            <FooterComponent />
        </>
    );
}
