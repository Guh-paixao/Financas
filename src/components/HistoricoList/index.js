
import {
    Container,
    TipoText,
    Tipo,
    IconView,
    ValorText,
    DescriptionView,
    DescriptionText
} from './styles';
import { TouchableWithoutFeedback, Alert } from 'react-native';

import Icon from '@expo/vector-icons/Feather';



export default function HistoricoList({ data, deleteItem }) {

    function handleDeleteItem() {
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Deletar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }


    return (
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon
                            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            size={20}
                            color="#FFF"
                        />
                        <TipoText>{data.type}</TipoText>
                    </IconView>

                    <DescriptionView>
                        <DescriptionText numberOfLines={1}>{data.description}</DescriptionText>
                    </DescriptionView>
                </Tipo>

                <ValorText>
                    R$ {data.value}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    );
}