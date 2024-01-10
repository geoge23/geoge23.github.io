import React from "react"

export default function TextSection({ children, className = "", ...props }) {
    return (
        <section className={`md:mt-8 mt-6 md:text-[1.6rem] text-[1.4rem] leading-7 md:max-w-[700px] ${className} relative`} {...props}>
            {children}
            <div className="top-0 md:-left-3 -left-4 absolute h-full flex items-center">
                <div className="w-[1px] h-4/6 bg-black"></div>
            </div>
        </section>
    )
}
