import React from "react";

type CardProps = {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (<div className="w-85 rounded-lg bg-white p-6 shadow-md">
        {children}
    </div>)
}