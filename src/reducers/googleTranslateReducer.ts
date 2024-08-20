import { AUTO_LANGUAGE } from "../contants/contants"
import { GoogleTranslateActions, GoogleTranslateState } from "../types"

export const initialState: GoogleTranslateState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false
}

export const googleTranslateReducer = (state: GoogleTranslateState = initialState, action: GoogleTranslateActions) => {
  const { type } = action

  if (type === "INTERCHANGE_LANGUAGES") {
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    }
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      fromText: action.payload,
      result: "",
      loading: true
    }
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      result: action.payload,
      loading: false
    }
  }
  return state
}