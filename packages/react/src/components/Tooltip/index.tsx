import { ComponentProps, ReactNode } from "react"
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from "./styles"

export type TooltipProps = ComponentProps<typeof TooltipProvider> & {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <TooltipArrow/>
            {content}
          </TooltipContent>
        </TooltipPortal>
        </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = "Tooltip"