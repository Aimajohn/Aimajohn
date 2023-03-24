import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
};

function ButtonCategory({ children, bgColor }: Props) {
  return (
    <button
      type="button"
      className={`px-4 h-10 m-1 font-semibold rounded-md bg-${bgColor}`}
    >
      {children}
    </button>
  );
}

export default ButtonCategory;
