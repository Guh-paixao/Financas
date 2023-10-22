import { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

import { AuthContext } from '../../contexts/auth';

import Header from "../../components/Header";
import {
    Background,
    ListBalance,
    Area,
    Title,
    List,
    TitleD
} from "./styles";

import api from "../../services/api";
import { format, toDate } from 'date-fns';

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import Icon from '@expo/vector-icons/MaterialIcons';
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";



export default function Home() {
    const isFocused = useIsFocused()
    const [listBalance, setListBalance] = useState([]);
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');


    const [dateMovements, setDateMovements] = useState(new Date())


    useEffect(() => {
        let isActive = true;

        async function getMovements() {
            let date = new Date(dateMovements)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormatted = format(onlyDate, 'dd/MM/yyyy');

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormatted
                }
            })


            const balance = await api.get('/balance', {
                params: {
                    date: dateFormatted
                }
            })

            if (isActive) {
                setMovements(receives.data)
                setListBalance(balance.data);
            }

            setSelectedDate(dateFormatted);
        }

        getMovements();


        return () => isActive = false;

    }, [isFocused, dateMovements])


    async function handleDelete(id) {
        try {
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMovements(new Date())
        } catch (error) {
            console.log(error)
        }
    }

    function filterDateMovements(dateSelected) {
        setDateMovements(dateSelected);
    }


    return (
        <Background>
            <Header title="Minhas movimentações" />

            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (<BalanceItem data={item} />)}
            />

            <Area>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon name="event" color="#121212" size={30} />
                </TouchableOpacity>

                <Title>Ultimas movimentações</Title>
                <TitleD>{selectedDate}</TitleD>
            </Area>

            <List
                data={movements}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <HistoricoList data={item} deleteItem={handleDelete} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={() => <Title style={{ alignSelf: 'center', marginTop: 200, fontStyle: 'italic', fontWeight: 'normal' }}>Não há transações...</Title>}
            />

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <CalendarModal
                    setVisible={() => setModalVisible(false)}
                    handleFilter={filterDateMovements}
                />
            </Modal>
        </Background>
    );
}