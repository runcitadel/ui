import { Dispatch } from 'react'
import { Loc } from './Loc'

export type LangAndDir = {
  loc: Loc
  setLoc: Dispatch<React.SetStateAction<Loc>>
}
