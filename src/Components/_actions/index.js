export const EXPECTED_AMOUNT = "EXPECTED_AMOUNT";
export const YEARLY_INCOME = "YEARLY_INCOME";
export const LOAN_PERIOD = "LOAN_PERIOD";
export const EXPECTED_INTEREST_RATE = "EXPECTED_INTEREST_RATE";

export const expectedAmount = (expectedAmountValue) => {
  return { type: EXPECTED_AMOUNT, payload: expectedAmountValue };
};

export const yearlyIncome = (yearlyIncomeValue) => {
  return { type: YEARLY_INCOME, payload: yearlyIncomeValue };
};

export const loanPeriod = (loanPeriodValue) => {
  return { type: LOAN_PERIOD, payload: loanPeriodValue };
};

export const expectedIncomeRate = (expectedIncomeRateValue) => {
  return { type: EXPECTED_INTEREST_RATE, payload: expectedIncomeRateValue };
};
