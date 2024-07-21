import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';

export function create({
    icon: Icon,
}: {
    icon?: LucideIcon;
}): React.ReactElement {
    return (
        Icon ? (
            <div className="rounded-md border bg-gradient-to-b from-secondary p-1 shadow-sm">
                <Icon />
            </div>
        )
        : <></>
    );
}