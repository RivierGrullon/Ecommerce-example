import { ChangeEventHandler, MouseEventHandler } from "react";

export interface InputProps{
    className?: any;
    children?: React.ReactNode;
    value?: string;
    type?: string;
    placeholder?: string;
    OnChange?: ChangeEventHandler<HTMLInputElement>;
}


export interface ButtonProps{
    className?: any;
    children?: React.ReactNode;
    type?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IconProps{
    className?: any;
    children?: React.ReactNode;
    icon?: string;
}