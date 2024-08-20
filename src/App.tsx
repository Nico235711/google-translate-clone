import { InterchangeLanguageIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { AUTO_LANGUAGE } from "./constants/constants";
import { useGoogleTranslate } from "./hooks/useGoogleTranslate";
import { SectionType } from "./types";

export default function App() {
  const {
    setFromLanguage,
    setToLanguage,
    toLanguage,
    fromLanguage,
    interChangeLanguages 
  } = useGoogleTranslate();

  return (
    <main className="max-w-[450px] mx-auto grid place-items-center grid-cols-3 h-screen gap-10">
      <div className="space-y-5">
        <LanguageSelector
          type={SectionType.From}
          value={fromLanguage}
          onChange={setFromLanguage} 
        />
        <textarea
          placeholder="Introducir texto"
          className="p-5 rounded-lg h-56 w-full border-2"
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          onClick={interChangeLanguages}
          className="bg-slate-300 rounded-lg shadow px-3 py-1 cursor-pointer hover:scale-95 transition-all disabled:opacity-50 disabled:cursor-auto disabled:scale-100"
          disabled={fromLanguage === AUTO_LANGUAGE}
        >
          <InterchangeLanguageIcon />
        </button>
      </div>
      <div className="space-y-5">
        <LanguageSelector
          type={SectionType.To}
          value={toLanguage}
          onChange={setToLanguage} 
        />
        <textarea
          placeholder="Traducción"
          className="p-5 rounded-lg h-56 w-full border-2"
        ></textarea>
      </div>
    </main>
  )
}
