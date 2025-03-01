import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
    labelName: string;
    color?: "red" | "blue";
}) {
    const { labelName, color } = props;
    return (
        <div className="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 28 28"
                enableBackground="new 0 0 28 28"
                stroke="white"
                fill="white"
                width="24px"
            >
                <polygon
                    fill="#FFFFFF"
                    points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
                />
                <polygon
                    fill="#FFFFFF"
                    points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "
                />
                <rect
                    x="15.5"
                    y="13.6"
                    transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
                    width="2"
                    height="6"
                />
                <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 " />
            </svg>
            <div className="absolute top-full left-full">
                <div
                    className={twMerge(
                        "inline-flex rounded-full font-bold text-sm bg-blue-500 text-white px-2 rounded-tl-none",
                        color === "red" && "bg-red-500"
                    )}
                >
                    {labelName}
                </div>
            </div>
        </div>
    );
}
