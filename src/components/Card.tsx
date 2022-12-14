import React from 'react'

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width: string;
    height: string;
    children: React.ReactChild | React.ReactNode;
    variant: CardVariant;
    onClick: () => void
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '2px solid gray' : "none",
            background: variant === CardVariant.primary ? "lightgray" : ""
        }}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card