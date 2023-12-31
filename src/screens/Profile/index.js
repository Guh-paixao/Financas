import { useContext } from "react";
import {
    Container,
    Message,
    Name,
    NewLink,
    NewText,
    LogoutButton,
    LogoutText
} from "./styles";

import Header from '../../components/Header';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from "@react-navigation/native";


export default function Profile() {
    const navigation = useNavigation();

    const { user, signOut } = useContext(AuthContext);

    return (
        <Container>
            <Header title="Meu Perfil" />

            <Message>Hey, bem-vindo(a) de volta!</Message>

            <Name numberOfLines={1}>{user && user.name}</Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButton onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </Container>
    );
}