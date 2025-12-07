import type { SVGProps } from 'react'

export const TrendArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      stroke="#079455"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 7-7.868 7.869c-.396.396-.595.594-.823.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668L9.13 12.132c-.396-.396-.594-.595-.822-.669a1 1 0 0 0-.618 0c-.228.075-.426.273-.822.669L2 17M22 7h-7m7 0v7"
    />
  </svg>
)
