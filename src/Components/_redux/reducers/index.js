import {
  EXPECTED_AMOUNT,
  YEARLY_INCOME,
  LOAN_PERIOD,
  EXPECTED_INTEREST_RATE,
} from "../../_actions";

const initialState = {
  expectedAmount: "",
  yearlyIncome: "",
  loanPeriod: "",
  expectedInterestRate: "",
};

export const calReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPECTED_AMOUNT:
      return { ...state, expectedAmount: action.payload };
    case YEARLY_INCOME:
      return { ...state, yearlyIncome: action.payload };
    case LOAN_PERIOD:
      return { ...state, loanPeriod: action.payload };
    case EXPECTED_INTEREST_RATE:
      return { ...state, expectedInterestRate: action.payload };
    default:
      return state;
  }
};
