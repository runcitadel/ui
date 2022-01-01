import { Dispatch } from 'react'
import { ActualLoc } from './ActualLoc'

export type LangAndDir = {
  actualLoc: ActualLoc
  setActualLoc: Dispatch<React.SetStateAction<ActualLoc>>
}
