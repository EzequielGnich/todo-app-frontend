import { CustomInputProps } from "./models";
import "./styles.scss";

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  required,
  onChange,
  value,
  name,
  type,
  id,
}) => {
  return (
    <div className="input-container">
      <div className="input-container__wrapper">
        <label className="custom-field">
          <input
            required={required}
            onChange={onChange}
            value={value}
            name={name}
            type={type}
            id={id}
          />
          <span className="placeholder">{placeholder}</span>
        </label>
      </div>
    </div>
  );
};
