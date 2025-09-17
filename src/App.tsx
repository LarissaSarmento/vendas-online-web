import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import styled from 'styled-components'
import { Button } from 'antd'


/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <StyledLink isBlue={count > 4} className="card">
        <Button type="primary"onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledLink>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

interface  PStyledLink{
  isBlue?: boolean
}

const StyledLink = styled.div<PStyledLink>`
  color: ${(props)=> (props.isBLue ? 'blue' : 'pink')};
  font-weight:bold;
`;

*/

// const MyDiv = (props) => { Possofazer assim também como abaixo
const myDiv = ({ titulo }) => {

  // console.log('props', props)
    return (
         <div>
           <h1>{titulo}</h1> 
            {/* <h1>{props.titulo}</h1> Posso fazer assim também */}
           <h2>Subtitulo</h2>
         </div>
    )
}

function App(){
    return (
        <div>
            <div>
                <myDiv titulo="Larissa"/>
            </div>
            <header>
                <h1>Titulo</h1>
                <h2>Subtitulo</h2>
            </header>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Dolor ratione expedita consequatur deserunt ipsa minima impedit nihil fugit sunt officiis esse neque, ab beatae corporis quidem aspernatur pariatur odit ipsum?</p>
            </div>
        </div>
    )
}

export default App
