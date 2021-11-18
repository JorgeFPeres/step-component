interface MultiStepProps {
  steps: {
    key: string
    render: () => JSX.Element
  }[]
  currentStepKey: string
}
export function MultiStep({ steps, currentStepKey }: MultiStepProps) {
  const stepToRender = steps.find((aStep) => aStep.key === currentStepKey)
    ?.render

  if (!stepToRender) {
    return null
  }

  return stepToRender()
}
