import { useContext } from "react";
import { CounterContext } from "../context/CounterContext.jsx";
import { TitleColorContext } from "../context/TitleColorContext.jsx";

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const useTitleColorContext = () => {
  return useContext(TitleColorContext);
};
