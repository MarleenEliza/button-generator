import Generator from "src/components/general/Generator/Generator";
import style from "./CodeInterface.module.scss";
import { useState } from "react";

type CodeInterfaceProps = {
  children: React.ReactNode;
};
const CodeInterface = ({ children }: CodeInterfaceProps) => {
  const prop = useState("small");

  return (
    <section className={style["code-interface"]}>
      <h2>CSS</h2>
      <Generator> generator</Generator>
      <h2>HTML</h2>
      <Generator> generator</Generator>
      CODE INTERFACE {children}
    </section>
  );
};
export default CodeInterface;
