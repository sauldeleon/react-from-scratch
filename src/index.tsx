import { useEffect, useState, Suspense, lazy } from 'react'
import ReactDom from 'react-dom'

import './style.css'
import './style.scss'

import Yeah from './assets/yeah.svg'
import jesucristo from './assets/jesucristo.jpg'
import jesucristoChiquito from './assets/jesucristo-chiquito.jpg'

export const OtherElementLazy = lazy(() => import('./OtherElement'))

export const TheElement: React.FunctionComponent<{ a: number }> = props => {
  const [a, setA] = useState(props.a)
  useEffect(() => {
    console.log(a)
  }, [a])
  return (
    <>
      <img src={jesucristo} />
      <button onClick={() => setA(a + 1)}>
        <Yeah />
        click me{' '}
        <Suspense fallback={'lalala'}>
          <OtherElementLazy />
        </Suspense>
      </button>
      <img src={jesucristoChiquito} alt="" />
    </>
  )
}

ReactDom.render(<TheElement a={1} />, document.getElementById('root'))
