import styled from 'styled-components'
import tags from './tags.json'

const Titulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
    margin: 60px 0px 30px 0px;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
    border-color: #C98CF1;
    }
`

const Tags = () => {
    return (
        <Container>
            <Titulo>Busque por tags:</Titulo>
            {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
        </Container>
    )
}

export default Tags