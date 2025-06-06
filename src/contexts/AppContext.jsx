import { createContext, useState, useEffect } from "react";
import { getApiData } from "../services/apiServices"

export const AppContext = createContext() //Essa é a maneira de criar um contexto

export const AppProvider = ({ children }) => { //AQUI é onde se define o que vai dentro do contexto
    const savedLanguage = localStorage.getItem('lang') //Aqui ele pegará e manterá o que tiver salvo no localStorage mesmo se o usuario fechar o site
    const [language, setLanguage] = useState(savedLanguage ?? 'br') //SE algo estiver salvo no savedLanguage, esse valor será usado, se não, usará BR
    const [languages, setLanguages] = useState() // Esse estado vai armazenar os idiomas
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetcLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts) //Aqui tá recebendo e salvando os valores passados pela API
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false) // Depois que terminar o Try Catch, FINALLY é executado
            }
        }
        fetcLanguages()
    }, []) // O colchete vazio é pra garantir que ele seja renderizado somente uma vez

    useEffect(()=> {
        localStorage.setItem('lang', language)
    }, [language]) //O valor é passado no colchetes para garantir que sempre que a tela atualizar, ele seja renderizado de novo

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    )
}