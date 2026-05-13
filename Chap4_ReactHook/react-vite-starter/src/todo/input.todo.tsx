interface IProps {
    name: string;
    age: number;
    info: {
        gender: string,
        address: string
    }

    optional?: string; // optional có thể có hoặc không
}

const InputTodo = (props: IProps) => {
    const { age, name, info } = props; // viết theo kiểu object Destructuring

    const handleClick = () => {
        alert("click me")
    }

    return (
        <div>
            <label htmlFor="input">Add new todo</label><br />
            <input
                type="text"
                onChange={(event) => {
                    console.log(event.target.value)
                }}
            />
            &nbsp; &nbsp;
            <button onClick={() => handleClick()}>save</button>

            <div>Age = {age}</div>
            <div>Name = {name}</div>
            <div>Info = {(info.gender ? "Nam" : "Nữ") + " and live in: " + props.info.address}</div>
        </div>
    )
}

export default InputTodo;