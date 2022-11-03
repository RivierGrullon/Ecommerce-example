import { ChangeEventHandler } from "react";

interface InputProps{
    className?: any;
    children?: React.ReactNode;
    value?: string;
    type?: string;
    placeholder?: string;
    OnChange?: ChangeEventHandler<HTMLInputElement>;
}


export function InputField({  type, placeholder, className }: InputProps): JSX.Element {
    return (
        <div className="flex">
            <input
                className={`border-2 border-gray-300 p-2 rounded-md outline-none ${className}`}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};
