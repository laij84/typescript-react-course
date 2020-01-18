export const none = 0
export const xxs = 2
export const xs = 4
export const sm = 8
export const md = 16
export const lg = 32
export const xl = 64

function formatSpace(space: number) {
  return `${space}px`
}

export const space = {
  none,
  xxs: formatSpace(xxs),
  xs: formatSpace(xs),
  sm: formatSpace(sm),
  md: formatSpace(md),
  lg: formatSpace(lg),
  xl: formatSpace(xl),
} as const

export type Space = keyof typeof space
