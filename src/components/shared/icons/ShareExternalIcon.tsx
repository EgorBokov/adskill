import { type SVGProps } from 'react'
export const ShareExternalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
    <path
      stroke="#1B3ED7"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.5 3.125a13.91 13.91 0 0 0-3.177.368 7.824 7.824 0 0 0-5.83 5.83 13.91 13.91 0 0 0 0 6.354 7.824 7.824 0 0 0 5.83 5.83c2.09.49 4.264.49 6.354 0a7.824 7.824 0 0 0 5.83-5.83c.245-1.045.368-2.111.368-3.177"
    />
    <path
      stroke="#1B3ED7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M17.708 3.125h4.167m0 0v4.861m0-4.861-6.25 7.292"
    />
  </svg>
)
