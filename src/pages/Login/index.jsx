import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyled';

export default function Login() {
    return (
        <Container>
            <Title>
                Login
                <small>Teste</small>
            </Title>
            <Paragraph>Lorem cinco</Paragraph>
            <button type='button'>Salvar</button>
        </Container>
    );
}