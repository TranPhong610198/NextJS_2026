import { useState } from "react";

interface IProps {
    listTodo: string[]
    setListTodo: (x: string[]) => void
}

const InputTodo = (props: IProps) => {

    const { listTodo, setListTodo } = props;
    const [todo, setTodo] = useState("");

    const handleClick = () => {
        if (!todo) {
            alert("empty todo!!!")
            return
        }
        setListTodo([...listTodo, todo]); //spread syntax
        setTodo("");
    }

    console.log(">>> check ");

    return (
        <div style={{ border: "1px solid red" }}>
            <label htmlFor="input">Add new todo</label><br />
            <input
                value={todo}
                type="text"
                onChange={(event) => {
                    setTodo(event.target.value)
                }}
            />
            &nbsp; &nbsp;
            <button onClick={() => handleClick()}>save</button>
        </div >
    )
}

export default InputTodo;