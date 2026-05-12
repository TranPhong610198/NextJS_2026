interface IProps {
    name: string;
    age: number;
    info: {
        gender: string,
        address: string
    }

    optional?: string; // optional có thể có hoặc không
}

function InputTodo(props: IProps) {

    // console.log(">>>> check props: ", props)

    return (
        <div>
            <label htmlFor="input">Add new todo</label><br />
            <input type="text" name="input" id="input" />
            &nbsp; &nbsp;
            <button type="submit">save</button>
            <div>Age = {props.age}</div>
            <div>Name = {props.name}</div>
            <div>Info = {(props.info.gender ? "Nam" : "Nữ") + " and live in: " + props.info.address}</div>
        </div>
    )
}

export default InputTodo;