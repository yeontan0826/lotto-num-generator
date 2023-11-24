import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { Header } from '../components/header/header';
import { Typography } from '../components/typography';
import { LottoNumberView } from '../components/lottoNumberView';

export const HistoryListScreen = (props) => {
  const history = useSelector((state) => state.numbers.history);

  const renderItem = ({ item }) => (
    <ItemContainer>
      <Typography fontsize={16}>{item.date}</Typography>
      <NumberWrapper>
        <LottoNumberView numbers={item.numbers} isHistory={true} />
      </NumberWrapper>
    </ItemContainer>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY" />
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{ paddingVertical: 24 }}
        renderItem={renderItem}
      />
    </View>
  );
};

const ItemContainer = styled.View`
  height: 120px;
  padding: 12px 20px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: white;
`;

const NumberWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
