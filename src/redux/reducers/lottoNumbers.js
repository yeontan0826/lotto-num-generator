import { CREATE_NEW_NUMBERS } from '../actions/lottoNumbers';

const defaultState = {
  currentNumber: [],
  history: [],
};

export const lottoNumberReducers = (state = defaultState, action) => {
  if (action.type === CREATE_NEW_NUMBERS) {
    const date = new Date();

    const newHistory = {
      date: `${date.getFullYear()}. ${date.getMonth()}. ${date.getDay()} ${date.getHours()}:${date.getMinutes()}`,
      numbers: action.numbers,
    };

    // 최근 순으로 추출
    return {
      ...state,
      currentNumber: action.numbers,
      history: [newHistory, ...state.history],
    };
  }

  return {
    ...state,
  };
};
