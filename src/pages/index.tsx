import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <Link href='/steps/pageA'>
      <a>Iniciar o Passo a Passo</a>
    </Link>
  )
}

export default HomePage
