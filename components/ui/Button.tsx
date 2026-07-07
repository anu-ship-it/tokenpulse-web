'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-semibold transition-all duration-150 cursor-pointer border-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--acc)] disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:   'bg-[var(--acc)] text-white hover:bg-[#7D71FF] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(108,95,255,0.3)]',
      secondary: 'bg-[var(--s2)] text-[var(--t2)] border border-[var(--bm)] hover:text-[var(--t)] hover:border-[var(--ab)]',
      ghost:     'bg-transparent text-[var(--t2)] hover:text-[var(--t)]',
      warning:   'bg-[rgba(245,158,11,0.12)] text-[var(--warn)] border border-[rgba(245,158,11,0.3)] hover:bg-[rgba(245,158,11,0.2)]',
    }

    const sizes = {
      sm: 'text-xs px-3 py-2 rounded-lg',
      md: 'text-sm px-5 py-3 rounded-[10px]',
      lg: 'text-[15px] px-6 py-[14px] rounded-[10px]',
    }

    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
