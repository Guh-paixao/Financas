import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #F0F4FF;
`;

export const ListBalance = styled.FlatList`
    max-height: 190px;
`;

export const Area = styled.View`
    margin-top: 20px;
    background-color: #FFF;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    flex-direction: row;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 14px;
    align-items: flex-start;
`;

export const Title = styled.Text`
    margin-left: 4px;
    color: #121212;
    margin-bottom: 14px;
    font-weight: bold;
    font-size: 18px;
`;

export const TitleD = styled.Text`
    color: #121212;
    margin-bottom: 14px;
    /* font-weight: bold; */
    font-size: 18px;
    font-style: italic;
    margin-left: auto;
    margin-right: 5p3;
`;

export const List = styled.FlatList`
    flex: 1;
    background-color: #FFF;
`;