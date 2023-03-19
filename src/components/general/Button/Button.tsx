import style from "./Button.module.scss";

type ButtonProps = {
  size: "small" | "normal" | "large";
  color: string;
  borderRadius: "none" | "small" | "large";
  backgroundColor: `#${string}`;
  text: string;
};
const Button = ({
  size,
  color,
  backgroundColor,
  borderRadius,
  text,
}: ButtonProps) => (
  <button
    data-size={size}
    data-border-radius={borderRadius}
    style={{ color, backgroundColor }}
    className={style["button"]}
  >
    {text}
  </button>
);
export default Button;
