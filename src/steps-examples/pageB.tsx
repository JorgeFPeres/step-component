import { useRouter } from 'next/dist/client/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useExampleContext } from '../context/use-context'

export function PageB() {
  const { push, back } = useRouter()
  const { data, saveData } = useExampleContext()
  const [input, setInput] = useState('')

  function handleGoNext() {
    saveData({ ...data, email: input })
    push('/steps/pageC')
  }

  return (
    <>
      <div>Page B</div>
      <form onSubmit={handleGoNext}>
        <label>
          E-mail:
          <input
            type='email'
            name='email'
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
