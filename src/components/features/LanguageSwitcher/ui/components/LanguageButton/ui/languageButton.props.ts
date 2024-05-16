import { baseLanguages } from "@/types/baseTypes";

export interface ILanguageButton {
    language: baseLanguages;
    flagOnly?: boolean
    onClick?: () => void;
}


