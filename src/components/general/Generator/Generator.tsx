import style from "./Generator.module.scss";

type GeneratorProps = {
  children: React.ReactNode;
};
const Generator = ({ children }: GeneratorProps) => {
  return <div className={style["generator"]}>{children}</div>;
};

export default Generator;
