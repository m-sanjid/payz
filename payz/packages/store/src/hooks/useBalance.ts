import { useRecoilValue } from "recoil";
import { balanceAtom } from "../atoms/balance";

export const userBalance = () => {
  const value = useRecoilValue(balanceAtom);
  return value;
}
