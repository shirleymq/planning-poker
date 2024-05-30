import { FC, ReactNode } from "react";
import "./button.css";

export type ButtonProps = {
  children: ReactNode | ReactNode[];
};
export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      <a>
        <span></span>
        <button className="button">{children}</button>
      </a>
    </div>
  );
};
