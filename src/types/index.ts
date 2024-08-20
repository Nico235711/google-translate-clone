import { AUTO_LANGUAGE, SUPPORTE_LANGUAGES } from "../contants/contants"

export type Language = keyof typeof SUPPORTE_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export type GoogleTranslateActions =
  | { type: "INTERCHANGE_LANGUAGES" } 
  | { type: "SET_FROM_LANGUAGE", payload: FromLanguage } 
  | { type: "SET_TO_LANGUAGE", payload: Language } 
  | { type: "SET_FROM_TEXT", payload: string } 
  | { type: "SET_RESULT", payload: string }

export type GoogleTranslateState = {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}