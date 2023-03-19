import style from "./Button.module.scss";

const DEFAULTS = {
  color: "#667",
  size: "normal",
  borderRadius: "small",
  backgroundColor: "#fff",
} as const;

type ButtonProps = {
  size?: "small" | "normal" | "large";
  color?: `#${string}`;
  borderRadius?: "none" | "small" | "large";
  backgroundColor?: `#${string}`;
  children: React.ReactNode;
};
const Button = ({
  size = DEFAULTS.size,
  color = DEFAULTS.color,
  backgroundColor = DEFAULTS.backgroundColor,
  borderRadius = DEFAULTS.borderRadius,
  children,
}: ButtonProps) => (
  <button
    data-size={size}
    data-border-radius={borderRadius}
    style={{ color, backgroundColor }}
    className={style["button"]}
  >
    {children}
  </button>
);
export default Button;
