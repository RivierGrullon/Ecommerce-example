import { InputProps } from "@models/types/Props";

//create a input component
export const InputField = ({  type, placeholder, className }: InputProps): JSX.Element => {
    return (
        <div className="flex  ">
            <input
                className={`border-2 border-gray-300 p-2 rounded-md outline-none ${className}`}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};
