import { styled } from "styled-components"
import EstiloGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerBackground from '/imagens/banner.png'
import Galeria from "./components/Galeria"

import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
    `

const AppContainer = styled.div`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
`

const MainContainer = styled.main`
    display: flex;
    gap: 24px;
`

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

`

const App = () => {
    const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
    const [fotoSelecionada, setFotoSelecionada] = useState(null)

    const aoAlterarFavorito = (foto) => {
        if (foto.id === fotoSelecionada?.id) {
            setFotoSelecionada({
                ...fotoSelecionada,
                favorito: !fotoSelecionada.favorito
            })
        }

        setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
            return {
                ...fotoDaGaleria,
                favorito: fotoDaGaleria.id === foto.id ? !foto.favorito : fotoDaGaleria.favorito
            }
        }))
    }

    return (
        <FundoGradiente>
            <EstiloGlobais />
            <AppContainer>
                <Cabecalho />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoGaleria>
                        <Banner
                            texto='A galeria mais completa de fotos do espaço!'
                            backgroundImage={bannerBackground}
                        />
                        <Galeria
                            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                            aoAlterarFavorito={aoAlterarFavorito}
                            fotos={fotosDaGaleria}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <ModalZoom
                foto={fotoSelecionada}
                aoFechar={() => setFotoSelecionada(null)}
                aoAlterarFavorito={aoAlterarFavorito}
            />
        </FundoGradiente>
    )
}

export default App