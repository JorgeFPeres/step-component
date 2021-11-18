import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { ExampleProvider } from '../../context/provider'
import { MultiStep } from '../../multistep-component/multi-step'
import { PageA } from '../../steps-examples/pageA'
import { PageB } from '../../steps-examples/pageB'
import { PageC } from '../../steps-examples/pageC'

type Step = 'pageA' | 'pageB' | 'pageC'

function Teste() {
  const router = useRouter()
  const currentStepKey = router.query.step as Step

  const steps = [
    {
      key: 'pageA',
      render: () => <PageA />,
    },
    {
      key: 'pageB',
      render: () => <PageB />,
    },
    {
      key: 'pageC',
      render: () => <PageC />,
    },
  ]

  return (
    <ExampleProvider>
      <MultiStep steps={steps} currentStepKey={currentStepKey} />
    </ExampleProvider>
  )
}

export default Teste
