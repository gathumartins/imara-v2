import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-ui text-ui-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-blue-700 text-white hover:bg-navy-800",
        navy: "bg-navy-900 text-white hover:bg-navy-800",
        gold: "bg-gold-700 text-white hover:bg-gold-500",
        outline: "border-blue-700 bg-background text-blue-700 hover:bg-blue-100",
        alert: "bg-alert text-white hover:bg-alert/90",
        ghost: "text-foreground hover:bg-muted",
        link: "text-blue-700 underline-offset-4 hover:underline",
        /** Frosted glass button for use on photography/dark hero backgrounds. */
        glass: "border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
        /** Solid white, no border — the other half of the glass-button pairing on dark backgrounds. */
        white: "border-transparent bg-white text-blue-700 hover:bg-blue-100",
      },
      size: {
        sm: "h-9 gap-1.5 px-4 text-sm has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        md: "h-12 gap-2 px-6 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        lg: "h-14 gap-2 px-8 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        /** 66px — matches the hero CTA pair in the Figma source exactly. */
        xl: "h-[66px] gap-2 px-8 text-base has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
