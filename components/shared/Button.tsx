"use client"

import clsx from "clsx";
import { ReactNode } from "react";

interface buttonProps {
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean
}

const Button = ({
    type,
    text,
    onClick,
    actionButton
}: buttonProps) => {
    return (
        <button
        onClick={onClick}
        type={type}
        className={clsx(
            actionButton &&
            "bg-orange-700 rounded-md px-4 py-2 text-white",
            "bg-orange-700 px-2 text-white"
        )}
        >
            {text}
        </button>
    );
}

export default Button;