import React, { createContext } from 'react'

interface InitialDataProps {
  name: string
  email: string
}

interface ContextProps {
  data: InitialDataProps
  saveData: (data: InitialDataProps) => void
}

export const initialData = {
  name: '',
  email: '',
}

export const ExempleContext = createContext<ContextProps>({
  data: initialData,
  saveData: (initialData) => {
    initialData
  },
})

export default ExempleContext
