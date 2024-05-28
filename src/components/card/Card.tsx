import { FC, ReactNode } from "react";
import "./card.css";

export type CardProps = {
  children: ReactNode | ReactNode[];
};
export const Card: FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
