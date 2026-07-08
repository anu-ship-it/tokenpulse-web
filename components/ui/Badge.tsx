import { clsx } from 'clsx'

interface BadgeProps {
    children: React.ReactNode
    variant?: 'live' | 'acc' | 'warn' | 'muted'
    className?: string
}

const variants = {
    live: 'text-[#00EA0] bg-[rgba(0,229,160,0.08)] border-[rgba(0,229,160,0.18)]',
    acc: 'text-[#6C5FFF] bg-[rgba(108,95,255,0.10)] border-[rgba(108,95,255,0.22)]',
    warn: 'text-[#F59E0B] bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.20)]',
    muted: 'text-[#727272] bg-[#141418] border-white/8',
}

export default function Badge({ children, variant = 'acc', className }: BadgeProps) {
    return (
        <span className={clsx(
            'font-mono text-[10px] font-semibold inline-block px-2 py-0.5 rounded border tracking-wide',
            variants[variant], className,
        )}>
            {children}
           </span> 
    )
}
