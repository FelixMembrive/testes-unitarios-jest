import { useState } from "react"
import { ListFormat } from "typescript"

function App() {

  const [list, setList] = useState(["Eduardo", "João", "Emerson"])
  const [newItem, setNewItem] = useState("")

  function addToList() {
    setList((state) => [...state, newItem])
  }

  return (
    <>
      <input placeholder="novo item" type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addToList} >Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App


