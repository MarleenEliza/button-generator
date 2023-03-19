import style from "./PropertyPanel.module.scss";

type PropertyPanelProps = {
  children: React.ReactNode;
};
const Generator = ({ children }: PropertyPanelProps) => {
  return <div className={style["property-panel"]}>{children}</div>;
};

export default Generator;
