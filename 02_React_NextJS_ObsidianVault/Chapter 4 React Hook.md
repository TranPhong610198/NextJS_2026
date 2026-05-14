### HTML Event

>[!note] 
>- Làm những sự kiện diễn ra trên website.
>- Có rất nhiều loại như **Form Event**, **Keyboard Event**, **Mouse**....

---
### Event Handle
>[!Note] 
>- Event Handle như cái tên, nó là cách phản hồi lại những sự kiện trong trang web.
>- Trong React nên dùng Arrow Function để tăng hiệu năng - [[00. Thắc mắc khi học#^0aa10f|Lí do]]
>- Định nghĩa một event sẽ băt đầu bằng chữ "on". Ex: onChange, onClick, ...

>[!attention] 
>- Khi viết Event Handle thì phải để phần logic nằm ngoài thẻ html để dễ nhìn

>[!example] 
>``` Typescript
> const InputTodo = (props: IProps) => {
> 	const { age, name, info } = props; //object Destructuring
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
>- Bản chất là một bộ nhớ của Component
>- State là 1 biến đặc biệt (chỉ React hiểu nó), không share giữa các component (nghĩa là, phạm vi của nó là local)
> - State thay đổi => giao diện thay đổi (re-render)

---
### Hook
> [!note] 
> - Hook được hiểu là 1 cái móc vào component để lấy thông tin về component đó
> - 4 loại hook: useState, useCallback, useEffect, useRef  - [[00. Thắc mắc khi học#^phanLoaiHook|Phân loại]]
> - Bắt buộc phải version 16.8 trở lên React mới hỗ trợ Hook

---
### useState Hook là gì?
> [!example] Cú pháp
> ```Type Script
> const[state, setState] = useState(initalValue)
> ```

---
### Passing Function từ Cha sang Con 
> [!note] 
> - Truyền functuion từ cha sang con thì truyền tương tự [[Chapter 3 React Basic#Props|props]]
> - **Lưu ý**: chỉ truyền tên function ko có dấu ()
> - Từ component con, thực thi function thì mới dùng dấu()

---
### Lift up State
> [!note] 
> - Lift-up state, giúp các component có thể nói chuyện với nhau (thông qua component
cha gần nhất)

---

### Về React Cơ Bản
>[!note] 
>- Hiểu được props/state là gì ?
>
> 	- [[Chapter 4 React Hook#State là gì?|State: ]] 
> 		- trạng thái của component. 
> 		- Cần lưu thông tin gì (variables, functions) của
> component, sử dụng state.
> 		- Về cách khai báo và sử dụng: const [state, setState] = useState(initialValue)
> 	- [[Chapter 3 React Basic#Props|Props]]: 
> 		- properties - tài sản chuyển từ cha sang con. Có thể truyền (variables, functions) từ cha sang con để component con có “data” để sử dụng
>
> - Khái niệm [[Chapter 3 React Basic#Render & Re-render|render/re-render]]
> 	- State/props thay đổi => component re-render (vẽ lại giao diện mà không cần reload)
> 	- Cập nhật state => thông qua useState hook. props của child component, thực chất là state của parent component
> 
> - React fiber ? (Virtual dom) => chỉ update những chỗ cần thiết
> 	- https://legacy.reactjs.org/docs/faq-internals.html
>
>- Batch update
