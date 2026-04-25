function InputTodo() {

    return (
        <div>
            <label htmlFor="input">Add new todo</label><br />
            <input type="text" name="input" id="input" />

            <button type="submit">save</button>
        </div>
    )
}

export default InputTodo;