import { useState } from 'react'
import './App.css'

function App() {
  const[inputDia, setInputDia] = useState('')
  function executarSwitchTrue(){
    let dia = Number(inputDia)
    switch(true){
      case dia < 8: alert('Dia ok')
      break;
      case dia <1 || dia>7: alert('Dia ruim')
      break;
      default: alert('ta daora')
    }
  }
  function executarComArray(){
    const dias = ['',"Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    let dia = Number(inputDia)
    alert(dias[dia  ])
  }
  function executar(){
    let valor= Number(inputDia)
    switch (valor){
      case 0:

      case 1: alert('Domingo')
              break;
      case 2: alert('Segunda')
              break;
      case 3: alert('Terça')
              break;
      case 4: alert('Quarta')
              break;
      case 5: alert('Quinta')
              break;
      case 6: alert('Sexta')
              break;
      case 7: alert('Sábado')
              break;
              default: alert('Digita certo parceiro')
    }
  }
  return (
    <>
      <input type="text" 
      value={inputDia}
      onChange={(e) => setInputDia(e.target.value)}
      />
      <button onClick={executar}>Executar</button>
      <button onClick={executarComArray}>Executar com array</button>
      <button onClick={executarSwitchTrue}>Executar Switch True</button>
    </>
  )
}

export default App
