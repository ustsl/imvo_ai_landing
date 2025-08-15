import { HeaderWidget } from "@/widgets/HeaderWidget";
import { baseLanguages } from "../types/base";
import { FooterComponent } from "@/widgets/FooterComponent";

export default async function LangLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: baseLanguages };
}) {

    return (
        <>
            <HeaderWidget lang={lang} />
            {children}
            <FooterComponent />
        </>
    );
}
