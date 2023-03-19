import style from "./UserInterface.module.scss";
import Button from "src/components/general/Button/Button";
import PropertyPanel from "src/components/general/PropertyPanel/PropertyPanel";

type UserInterfaceProps = {
  children?: React.ReactNode;
};
const UserInterface = ({ children }: UserInterfaceProps) => (
  <section className={style["user-interface"]}>
    <Button> PREVIEW</Button>

    <PropertyPanel> property</PropertyPanel>
    <Button> GENERATE</Button>

    {children}
  </section>
);
export default UserInterface;
