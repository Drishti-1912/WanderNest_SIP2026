/**
 * Props:
 * text: string
 * onClick: function
 * type: button | submit
 * width: string
 */
import styles from "./Button.module.css";

export default function Button({
  text,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
    >
      {text}
    </button>
  );
}