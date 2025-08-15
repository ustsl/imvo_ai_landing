import { HeaderWidget } from "@/widgets/HeaderWidget";
import { baseLanguages } from "../types/base";
import { FooterComponent } from "@/widgets/FooterComponent";

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: baseLanguages }>;
}) {
    const { lang } = await params;

    return (
        <>
            <HeaderWidget lang={lang} />
            {children}
            <FooterComponent />
        </>
    );
}
