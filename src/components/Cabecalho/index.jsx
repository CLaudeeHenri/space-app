import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const CabecalhoEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <CabecalhoEstilizado>
            <img src="/imagens/logo.png" alt="logo do space app" />
            <CampoTexto />
        </CabecalhoEstilizado>
    )
}

export default Cabecalho