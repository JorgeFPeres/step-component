import React, { useMemo, useState } from 'react'

import Context, { initialData } from './context'

interface InitialDataProps {
  name: string
  email: string
}

export function ExampleProvider({ children }: any) {
  const [data, setData] = useState<InitialDataProps>(initialData)

  function saveData(invite: InitialDataProps) {
    setData(invite)
  }

  const contextValue = useMemo(() => ({ data, saveData }), [data])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
