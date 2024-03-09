// actions.js
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increase = () => {
  return {
    type: INCREASE,
  };
};

export const decrease = () => {
  return {
    type: DECREASE,
  };
};
