import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "size-14 text-neutral-950 font-medium text-xl bg-neutral-300 inline-flex justify-center items-center rounded-2xl",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}
