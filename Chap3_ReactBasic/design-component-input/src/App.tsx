import InputTodo from "./todo/input.todo"

function App() {

  const name = "TheMoriarty";
  const age = 25;
  const info = {
    gender: "male",
    address: "Ha Noi"
  };

  const todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5", "todo 6"]

  return (
    <div>
      <div className="parent">
        <div className="child"></div>
      </div>
      <InputTodo
        name={name}
        age={age}
        info={info}
      />

      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App