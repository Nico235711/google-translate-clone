import { useReducer } from "react"
import { googleTranslateReducer, initialState } from "../reducers/googleTranslateReducer"
import { FromLanguage, GoogleTranslateState, Language } from "../types"

export const useGoogleTranslate = () => {
  const [state, dispatch] = useReducer(googleTranslateReducer, initialState)
  const { fromLanguage, fromText, loading, result, toLanguage } = state

  const interChangeLanguages = () => dispatch({ type: "INTERCHANGE_LANGUAGES" })
  const setFromLanguage = (payload: FromLanguage) => dispatch({ type: "SET_FROM_LANGUAGE", payload })
  const setToLanguage = (payload: Language) => dispatch({ type: "SET_TO_LANGUAGE", payload })
  const setFromText = (payload: GoogleTranslateState["fromText"]) => dispatch({ type: "SET_FROM_TEXT", payload })
  const setResult = (payload: GoogleTranslateState["result"]) => dispatch({ type: "SET_RESULT", payload })

  return {
    fromLanguage,
    fromText,
    loading,
    result,
    toLanguage,
    interChangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
