import { useRouter } from 'next/dist/client/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useExampleContext } from '../context/use-context'

export function PageA() {
  const { push, query, back } = useRouter()
  const { data, saveData } = useExampleContext()
  const [input, setInput] = useState('')

  function handleGoNext() {
    saveData({ ...data, name: input })
    push('/steps/pageB')
  }

  return (
    <>
      <div>Page A</div>
      <form onSubmit={handleGoNext}>
        <label>
          Nome:
          <input
            type='text'
            name='name'
            value={input}
            onInput={(e: any) => setInput(e.target.value)}
          ></input>
        </label>
        <button onClick={back}>Voltar</button>
        <button type='submit'>Avançar</button>
      </form>
    </>
  )
}
