import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;
    return (
        <div
            className={twMerge(
                "rounded-3xl bg-neutral-900 p-6 border border-white/10",
                className
            )}
        >
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-white text-3xl font-medium mt-6">
                    {title}
                </h3>
                <p className="text-white/50 mt-2">{description}</p>
            </div>
        </div>
    );
}
