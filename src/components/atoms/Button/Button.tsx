import { ButtonProps } from "@models/types/Props";
export const Button = ({ children, onClick, className}: ButtonProps) => {
    return (
        <button
        className={`border-2 border-none p-3 rounded-2xl ${className}`}
        onClick={onClick}
        >
        {children}
        <i className="fas fa-heart"></i>
        </button>
    );
};



