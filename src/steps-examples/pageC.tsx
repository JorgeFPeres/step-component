import { useRouter } from 'next/dist/client/router'
import { useExampleContext } from '../context/use-context'

export function PageC() {
  const { push, query, back } = useRouter()
  const { data } = useExampleContext()

  function handleGoNext() {
    push('/')
  }

  return (
    <>
      <div>Page C</div>
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
      <button onClick={back}>Voltar</button>
      <button onClick={handleGoNext}>Avançar</button>
    </>
  )
}
