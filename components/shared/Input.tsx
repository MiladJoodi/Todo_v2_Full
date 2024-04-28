interface inputProps {
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    className?:string;
}

const Input = ({
    name,
    type,
    value,
    placeholder,
    className
}: inputProps) => {
    return (
        <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            className={`w-full p-2 rounded-md outline-none text-lg ${className}`}
        />
    );
}

export default Input;