import { InterchangeLanguageIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { AUTO_LANGUAGE } from "./contants/contants";
import { useGoogleTranslate } from "./hooks/useGoogleTranslate";

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
          type="from"
          value={fromLanguage}
          onChange={setFromLanguage} 
        />
        <h2 className="text-center text-2xl font-bold">From {fromLanguage}</h2>
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
          type="to"
          value={toLanguage}
          onChange={setToLanguage} 
        />
        <h2 className="text-center text-2xl font-bold">To {toLanguage}</h2>
      </div>
    </main>
  )
}
