import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface CustomInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  name: string;
  id: string;
}
