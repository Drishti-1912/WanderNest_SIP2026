/**
 * Props:
 * placeholder
 * value
 * onChange
 * type
 */
import styles from "./Input.module.css";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
}) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      required={required}
    />
  );
}