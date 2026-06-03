import type { ButtonHTMLAttributes } from "react"
import type { LucideIcon } from "lucide-react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost'
  icon?: LucideIcon
}

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-3 rounded-full font-medium text-sm transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses = {
  primary: 'bg-primary text-primary-foreground font-semibold rounded-x1',
  secondary: 'bg-secondary-button border border-borderrounded-3x1',
  ghost: 'rounded-lg text-foreground',
}

export function Button({
  variant,
  icon: Icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={[baseClasses, variantClasses[variant], className].join(' ')}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  )
}