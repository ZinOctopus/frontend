import { useId } from 'react'

// The brand mark and lockup: the Zin fox on an orange tile, the same drawing as public/favicon.svg (keep the two in
// step). The tile and the fox are fixed colours, so the mark reads on the sider, the sign-in page and the one-window
// notice in both themes. Each instance takes its own gradient id: marks sharing one id would break when the first
// one is hidden.

const FOX =
  'M256 188.1L309.5 165.1L391.7 62L393.6 232L426.1 302.7L301.9 390.6L281.7 415.9L230.3 415.9L210.1 390.6L85.9 302.7L118.4 232L120.3 62L202.5 165.1ZM136.1 107.8L135 198L179.7 162.5ZM375.9 107.8L377 198L332.3 162.5ZM154.7 270.2L184.4 267.8L208.2 285.5L177.8 290.7ZM357.3 270.2L327.6 267.8L303.8 285.5L334.2 290.7Z'
const NOSE = 'M281.7 414.4L256 448L230.3 414.4Z'

export function LogoMark({ size = 40 }: { size?: number }) {
  const gradient = useId()
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8820A" />
          <stop offset=".5" stopColor="#F97316" />
          <stop offset="1" stopColor="#E1401B" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="112" fill={`url(#${gradient})`} />
      <path fill="#fff" fillRule="evenodd" d={FOX} />
      <path fill="#16181A" d={NOSE} />
    </svg>
  )
}

/** Mark and wordmark together. The parent sets the font size; "in" carries the accent. */
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-word">
        Z<span>in</span>
      </span>
    </span>
  )
}
