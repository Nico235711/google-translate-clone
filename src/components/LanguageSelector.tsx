import { ChangeEvent } from "react"
import { FromLanguage, Language, SectionType } from "../types"
import { SUPPORTE_LANGUAGES } from "../constants/constants"

type LanguageSelectorProps = 
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, value }: LanguageSelectorProps) => {

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <select
      name="language"
      id="language"
      className="w-52 py-1 px-2 rounded-lg border-2 bg-black opacity-60 text-white"
      onChange={handleChangeLanguage}
      value={value}
    >
      <option value="">-- Seleccione el idioma --</option>
      {
        Object.entries(SUPPORTE_LANGUAGES).map(language => (
          <option value={language[1]} key={language[1]}>{language[1]}</option>
        ))
      }
    </select>
  )
}
