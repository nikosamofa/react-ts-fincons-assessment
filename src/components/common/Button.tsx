import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  [key: string]: any;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.common}>
      {children}
    </button>
  );
};
