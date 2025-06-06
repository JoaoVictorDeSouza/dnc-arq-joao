import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScroollToTop = () => {
    const { pathname } = useLocation() //O useLocation deve ser passado como uma função, caso contrario não funcionará

    useEffect(() => {
        window.scrollTo(0, 0) //Utilizado pra indicar a posição da tela quando atualizar a pagina
    }, [pathname])

    return null
}

export default ScroollToTop