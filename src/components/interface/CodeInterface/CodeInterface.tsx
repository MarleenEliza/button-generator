import Generator from "src/components/general/Generator/Generator";
import style from "./CodeInterface.module.scss";

type CodeInterfaceProps = {
  children: React.ReactNode;
};
const CodeInterface = ({ children }: CodeInterfaceProps) => (
  <section className={style["code-interface"]}>
    <h2>CSS</h2>
    <Generator> generator</Generator>
    <h2>HTML</h2>
    <Generator> generator</Generator>
    CODE INTERFACE {children}
  </section>
);
export default CodeInterface;
