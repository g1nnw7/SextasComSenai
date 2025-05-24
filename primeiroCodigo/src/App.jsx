import './App.css'

function App() {

  function adivinhar(){
    let aleatorio = Math.ceil(Math.random()*10)
    let palpite = Number(prompt("Chuta ai"))

    if(palpite == aleatorio){
      alert("Parabens, voce acertou!")
    }
    else{
      alert("Errou sua mula, o número certo era: " + aleatorio)
    }
    console.log(aleatorio);

  }

  return (
    <>
      <h1>Exercício 1</h1>
      <button onClick={adivinhar}>Adivinhar</button>
    </>
  )
}

export default App
