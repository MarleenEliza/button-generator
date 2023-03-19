import { useState } from "react";
import style from "./UserInterface.module.scss";
import Button from "src/components/general/Button/Button";
import PropertyPanel from "src/components/general/PropertyPanel/PropertyPanel";
import { HexColorPicker } from "react-colorful";
import { reduceListToPropertiesObject } from "src/helpers";

type PropertiesSetByUser = Omit<
  React.ComponentProps<typeof Button>,
  "children"
>;

const FORM_FIELDS = {
  color: {
    label: "color",
    type: "color",
    default: "#667",
  },
  size: {
    label: "size",
    type: "select",
    default: "normal",
    options: ["small", "normal", "large"],
  },
  borderRadius: {
    label: "borderRadius",
    type: "select",
    default: "small",
    options: ["small", "none", "large"],
  },
  backgroundColor: {
    label: "backgroundColor",
    type: "color",
    default: "#fff",
  },
  text: {
    label: "text",
    type: "text",
    default: "Button Text",
  },
} as const;

type InputElementProps = {
  type: "select" | "color" | "text";
  options?: string[];
  // currentValue: PropType;
};
const InputElement = ({
  label,
  type,
}: // options,
(typeof FORM_FIELDS)[keyof typeof FORM_FIELDS]) => {
  const colorChangeHandler = (color: string) => {
    console.log(color);
  };

  return (
    <label className={style["user-interface__input-element"]}>
      <h2>{label}</h2>
      {/* {type === 'select' && options && <></>} */}
      {/* {type === "color" && (
        <HexColorPicker color="#fff" onChange={colorChangeHandler} />
      )} */}
    </label>
  );
};
const UserInterface = () => {
  const [propertiesSetByUser, setPropertiesSetByUser] =
    useState<PropertiesSetByUser>({
      color: FORM_FIELDS.color.default,
      backgroundColor: FORM_FIELDS.color.default,
      size: FORM_FIELDS.size.default,
      text: FORM_FIELDS.text.default,
      borderRadius: FORM_FIELDS.borderRadius.default,
    });

  const submitHandler = () => {
    console.log("update preview");
  };

  return (
    <section className={style["user-interface"]}>
      <Button {...propertiesSetByUser}>{}</Button>
      <form onSubmit={submitHandler}>
        {Object.values(FORM_FIELDS).map(InputElement)}
        <Button
          size="large"
          color="#fff"
          backgroundColor="#ff8e"
          borderRadius="large"
          text="generate"
        ></Button>
      </form>
      <PropertyPanel> property</PropertyPanel>
    </section>
  );
};
export default UserInterface;
