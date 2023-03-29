import { ChangeEvent } from "react";

export interface IProps {
    label: string;
    value: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IProps) => {
    const { label, value, type, onChange } = props;
    return (
        <div className="form-group">
          <label>{label} : </label>
          <div>
            <input 
                type={type} 
                value={value} 
                onChange={onChange}
            />
          </div>
        </div>
    );
}