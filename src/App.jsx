import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  return (
    <>
      <div className='container'>
        <h1>Tarefas</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          setTarefas([
            ...tarefas,
            tarefa,
          ]);
          setTarefa('');
        }}>
          <div>
            <input onChange={(event) => {
              setTarefa(event.target.value);
            }}
              value={tarefa}
              type="text" />
            <button type="submit">Adicionar</button>
          </div>
        </form>
        {tarefas.map((tarefa) => (
          <div>
            <input type="text" disabled value={tarefa} />
            <button onClick={() => {
              setTarefas(
                tarefas.filter((_tarefa) => _tarefa !== tarefa ));
    }}>Excluir</button>
    </div> 
    ))}
    </div >
    </>
  )
}

export default App
