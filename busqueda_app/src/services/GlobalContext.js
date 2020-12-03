import React, { useReducer, createContext } from "react"

// services
import { recordLog } from "./auth"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
  isAuthenticated: false,
  isFunction: false,
  isRegion: false,
  isSalesAreas: false,
  checkSalesArea: false,
  email: null,
  userName: null,
  lt: null,
  token: null,
  environment: "LQ1",
  funciones: [],
  pools: [],
  regiones: [],
  salesAreas: [],
  roles: [],
  region: null,
  error: false,
  errorMsg: null,
  language: "en",
  theme: "light",
  display: "cards",
  load: false,
  modulePerCountry: "standard_version",
  show: true,
  componentPrintable: null,
  nameApp: null,
  dataType: "orders",
  showMobileFilters: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("userName", action.payload.userName)
      sessionStorage.setItem("email", action.payload.email)
      sessionStorage.setItem("lt", action.payload.lt)
      sessionStorage.setItem("token", action.payload.token)
      sessionStorage.setItem("language", action.payload.language)
      sessionStorage.setItem("regiones", action.payload.regiones)
      sessionStorage.setItem("funciones", action.payload.funciones)
      sessionStorage.setItem("pools", action.payload.pools)
      sessionStorage.setItem("roles", action.payload.roles)
      sessionStorage.setItem("salesAreas", action.payload.salesAreas)
      sessionStorage.setItem("nameApp", action.payload.nameApp)
      sessionStorage.setItem("environment", action.payload.environment)
      sessionStorage.setItem("isAuthenticated", true)
      sessionStorage.setItem("theme", "light")
      sessionStorage.setItem("show", true)
      sessionStorage.setItem("display", "cards")
      sessionStorage.setItem("load", false)
      sessionStorage.setItem("error", false)
      sessionStorage.setItem("errorMsg", null)
      sessionStorage.setItem("isFunction", true)
      sessionStorage.setItem("dataType", "orders")
      sessionStorage.setItem("showMobileFilters", false)
      return {
        ...state,
        isAuthenticated: true,
        isFunction: true,
        token: action.payload.token,
        language: action.payload.language,
        regiones: action.payload.regiones,
        funciones: action.payload.funciones,
        pools: action.payload.pools,
        roles: action.payload.roles,
        salesAreas: action.payload.salesAreas,
        email: action.payload.email,
        userName: action.payload.userName,
        lt: action.payload.lt,
        nameApp: action.payload.nameApp,
        environment: action.payload.environment,
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        isFunction: false,
        isRegion: false,
      }
    // REGION AND MODULE PER COUNTRY BASE IN REGION
    case "SET_REGION":
      sessionStorage.setItem("region", action.payload.region)
      sessionStorage.setItem("module", action.payload.region)
      let isR = state.regiones.includes(action.payload.region) ? true : false
      if (isR) {
        sessionStorage.setItem("isRegion", isR)
        recordLog(state.userName, action.payload.region, state.nameApp)
      }
      return {
        ...state,
        region: action.payload.region,
        modulePerCountry: action.payload.region,
        isRegion: isR,
      }
    case "SET_SALESAREA":
      sessionStorage.setItem("salesAreas", action.payload.salesAreas)
      let sales = action.payload.salesAreas
      let isS = sales.length > 0 ? true : false
      if (isS) {
        sessionStorage.setItem("isSalesAreas", isS)
      }
      return {
        ...state,
        salesAreas: action.payload.salesAreas,
        isSalesAreas: isS,
      }
    case "SET_ENVIRONMENT":
      sessionStorage.setItem("environment", action.payload.environment)
      return {
        ...state,
        environment: action.payload.environment,
      }

    case "SET_ERROR":
      sessionStorage.setItem("error", action.payload.error)
      sessionStorage.setItem("errorMsg", action.payload.errorMsg)
      return {
        ...state,
        error: action.payload.error,
        errorMsg: action.payload.errorMsg,
      }
    case "SET_LOAD":
      sessionStorage.setItem("load", action.payload.load)
      return {
        ...state,
        load: action.payload.load,
      }
    //  VIEW IN CARDS OR TABLE
    case "SET_DISPLAY":
      sessionStorage.setItem("display", action.payload.display)
      return {
        ...state,
        display: action.payload.display,
      }
    // HIDE / SHOW FILTERS
    case "SET_SHOW":
      let show = state.show ? false : true
      sessionStorage.setItem("show", show)
      return {
        ...state,
        show: show,
      }
    case "SET_THEME": {
      let theme = state.theme === "light" ? "dark" : "light"
      sessionStorage.setItem("theme", theme)
      return {
        ...state,
        theme: theme,
      }
    }
    case "SET_PRINT": {
      sessionStorage.setItem(
        "componentPrintable",
        action.payload.componentPrintable
      )
      return {
        ...state,
        componentPrintable: action.payload.componentPrintable,
      }
    }
    case "SET_LANG": {
      sessionStorage.setItem("language", action.payload.language)
      return {
        ...state,
        language: action.payload.language,
      }
    }
    case "SET_DATATYPE": {
      sessionStorage.setItem("dataType", action.payload.dataType)
      return {
        ...state,
        dataType: action.payload.dataType,
      }
    }
    case "SET_MOBILEFILTERS": {
      let show = state.showMobileFilters ? false : true
      sessionStorage.setItem("showMobileFilters", show)
      return {
        ...state,
        showMobileFilters: show,
      }
    }
    case "RESET": {
      return initialState
    }
    default:
      console.error(`Invalid action type: ${action.type}`)
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

const init = () => {
  if (typeof window !== `undefined`) {
    return {
      isAuthenticated: sessionStorage.getItem("isAuthenticated")
        ? sessionStorage.getItem("isAuthenticated")
        : false,
      isFunction: sessionStorage.getItem("isFunction")
        ? sessionStorage.getItem("isFunction")
        : false,
      isRegion: sessionStorage.getItem("isRegion")
        ? sessionStorage.getItem("isRegion")
        : false,
      email: sessionStorage.getItem("email"),
      userName: sessionStorage.getItem("userName"),
      lt: sessionStorage.getItem("lt"),
      token: sessionStorage.getItem("token"),
      environment: sessionStorage.getItem("environment"),
      funciones: sessionStorage.getItem("funciones"),
      pools: sessionStorage.getItem("pools"),
      regiones: sessionStorage.getItem("regiones"),
      salesAreas: sessionStorage.getItem("salesAreas"),
      roles: sessionStorage.getItem("roles"),
      region: sessionStorage.getItem("region"),
      error: sessionStorage.getItem("error"),
      errorMsg: sessionStorage.getItem("errorMsg"),
      language: sessionStorage.getItem("language"),
      theme: sessionStorage.getItem("theme"),
      display: sessionStorage.getItem("display"),
      load: sessionStorage.getItem("load"),
      modulePerCountry: sessionStorage.getItem("module"),
      show: sessionStorage.getItem("show"),
      componentPrintable: sessionStorage.getItem("componentPrintable"),
      nameApp: sessionStorage.getItem("nameApp"),
      dataType: sessionStorage.getItem("dataType"),
      showMobileFilters: sessionStorage.getItem("showMobileFilters"),
    }
  } else {
    return initialState
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init)

  return (
    <>
      <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
          {children}
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </>
  )
}

export default GlobalContextProvider
