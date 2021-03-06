import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e Boilerplate escrito ao lado."
    />
    <S.Title>Boilerplate</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
