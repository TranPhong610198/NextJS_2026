import { useState } from "react";
import InputTodo from "./todo/input.todo"

function App() {

  const [listTodo, setListTodo] = useState(
    ["Typed todo"]
  )

  return (
    <div>
      <div className="parent">
        <div className="child"></div>
      </div>
      <InputTodo
        listTodo={listTodo}
        setListTodo={setListTodo}
      />

      <ul>
        {listTodo.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>

    </div>
  )
}

export default App