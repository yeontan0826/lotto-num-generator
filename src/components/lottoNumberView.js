import { useCallback, useEffect, useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { Typography } from './typography';

export const LottoNumberView = (props) => {
  const [viewHeight, setViewHeight] = useState(0);
  const [animValue] = useState(new Animated.Value(1));

  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor((Math.random() * 10) % 6);
    if (randomNumber === 0) {
      return 'red';
    }

    if (randomNumber === 1) {
      return 'blue';
    }

    if (randomNumber === 2) {
      return 'gray';
    }

    if (randomNumber === 3) {
      return 'green';
    }

    if (randomNumber === 4) {
      return 'purple';
    }

    return 'black';
  }, []);

  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewHeight * 0.6, 0],
  });

  useEffect(() => {
    animValue.setValue(0);
    Animated.timing(animValue, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, [props.numbers]);

  return (
    <Container
      onLayout={({ nativeEvent }) => setViewHeight(nativeEvent.layout.height)}
    >
      {props.numbers.map((item) => (
        <Number
          key={String(item)}
          style={{
            backgroundColor: getNumberBackgroundColor(),
            transform: [
              {
                translateY: props.isHistory ? 0 : translateY,
              },
            ],
          }}
        >
          <Typography fontSize={20} color="white">
            {item}
          </Typography>
        </Number>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Number = styled(Animated.View)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
