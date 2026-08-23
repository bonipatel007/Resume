import { ArrowUpRight } from 'lucide-react'
import './Button.css'

/**
 * Reusable Button.
 * variant: 'primary' | 'secondary' | 'ghost'
 * as: 'a' | 'button' (renders an anchor by default when href is provided)
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon = true,
  type = 'button',
  className = '',
}) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        <span>{children}</span>
        {icon && <ArrowUpRight size={17} strokeWidth={2.25} aria-hidden="true" />}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      <span>{children}</span>
      {icon && <ArrowUpRight size={17} strokeWidth={2.25} aria-hidden="true" />}
    </button>
  )
}
