interface BadgeProps {
    content: string;
}

export function Badge({ content }: BadgeProps): JSX.Element {
    return (
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-teal-800 text-teal-300">
            { content }
        </span>
    )
}