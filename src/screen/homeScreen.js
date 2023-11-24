import { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { Header } from '../components/header/header';
import { Spacer } from '../components/spacer';
import { Button } from '../components/button';
import { Typography } from '../components/typography';
import { LottoNumberView } from '../components/lottoNumberView';
import { createNewNumbers } from '../redux/actions/lottoNumbers';

export const HomeScreen = () => {
  const numbers = useSelector((state) => state.numbers.currentNumber);
  const dispatch = useDispatch();

  const onPressGetNumber = useCallback(() => {
    dispatch(createNewNumbers());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME" />
      </Header>
      <Container>
        <NumberWrapper>
          {numbers.length === 6 && <LottoNumberView numbers={numbers} />}
        </NumberWrapper>
        <Spacer space={20} />

        <Button onPress={onPressGetNumber}>
          <ButtonWrapper>
            <Typography color="white" fontSize={18}>
              로또 번호 추출하기
            </Typography>
          </ButtonWrapper>
        </Button>
      </Container>
    </View>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
`;

const NumberWrapper = styled.View`
  height: 250px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: white;
`;

const ButtonWrapper = styled.View`
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 10px;
`;
