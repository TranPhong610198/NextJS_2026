### HTML Event

>[!note] 
>- Làm những sự kiện diễn ra trên website.
>- Có rất nhiều loại như **Form Event**, **Keyboard Event**, **Mouse**....

---
### Event Handle
>[!Note] 
>- Trong React nên dùng Arrow Function để tăng hiệu năng - [[00. Thắc mắc khi học#^0aa10f|Lí do]]
>- Định nghĩa một event sẽ băt đầu bằng chữ "on"

>[!attention] 
>- Khi viết Event Handle thì phải để phần logic nằm ngoài thẻ html để dễ nhìn

>[!example] 
>``` Typescript
> const InputTodo = (props: IProps) => {
> 	const { age, name, info } = props; // viết theo kiểu object Destructuring
> 	
> 	const handleClick = () => {
> 		alert("click me")
> 	}
> 	
> 	return (
> 		<div>
> 			<label htmlFor="input">Add new todo</label><br />
> 			<input
> 				type="text"
> 				onChange={(event) => {
> 					console.log(event.target.value)
> 				}}
> 			/>
> 			&nbsp; &nbsp;
> 			<button onClick={() => handleClick()}>Save</button>
> 		</div>
> 	)
> }
> export default InputTodo;
>```

---
### State là gì? 
>[!note] 
>- Dùng để hiển thị trạng thái của Component
>- State là 1 biến đặc biệt (chỉ React hiểu nó), không share giữa các component (nghĩa là, phạm vi của nó là local)
> - State thay đổi => giao diện thay đổi (re-render)

---
### useState Hook





