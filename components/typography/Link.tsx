import { styled } from '../../styles/stitches.config'
import NextLink from 'next/link'

export const Link = styled(NextLink, {
  color: '$primary',
  '@dark': {
    color: '$tertiary',
  },
})
