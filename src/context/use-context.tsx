import { useContext } from 'react'
import ExempleContext from './context'

export function useExampleContext() {
  const context = useContext(ExempleContext)
  return context
}
