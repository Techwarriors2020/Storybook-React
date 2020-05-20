
import React from 'react';


interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    clicked?: any;
    classes ?:[];
}

const Button: React.FC<IButtonProps> = ({ clicked, children, ...props }) => {
    return (
        <button {...props} onClick={clicked}>
            {children}
        </button>
    );
};

export default Button;


