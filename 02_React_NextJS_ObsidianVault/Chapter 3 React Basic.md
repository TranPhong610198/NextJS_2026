### React là gì?
> [!note] 
> - Là một thư viện (library) viết bằng javaScript
> - Phát triển bởi Facebook (meta)
> - Nguồn đọc [react.dev](https://react.dev/learn/)
### Phân loại dự án React
> [!note] 
> - React ở client và React ở Server
> 	- React ở Client: create-react-app, vite
> 		- Không đặt nặng về SEO
> 		- Quan trọng việc "thay đổi dữ liệu thường xuyên" ở client
> 		- Dữ liệu sẽ được 100% client xử lý => loading khi vào trang
> 		- ví dụ: https://iboard.ssi.com.vn/
> 	- React ở Server: next.js, remix, gatsby 
> 		- Quan tâm tới SEO
> 		- Dữ liệu ít thay đổi
> 		- Dữ liệu sẽ được server xử lý => không bị loading khi vào trang
> 		- Thư mục sẽ ko chứa index.html
### Setup Project React với Vite
>[!note] 
> - Tải source code từ [link](https://gitlab.com/public-starter-projects1/01-nextjs-basic-soundcloud/react-vite-starter) về chạy `npm i` để cài đặt các thư viện cần thiết rồi chạy câu lệnh `npm run dev` để chạy dự án
> - Khi code lỗi mà thấy thông báo lỗi đc là nhờ đã có cấu hình sẵn eslint: https://github.com/vitejs/vite/issues/2076

### Cấu trúc thư mục
>[!note] 
> -  Thư mục ==node_modules== chứa các thư viện đã cài đặt từ file ==package.json==
> - Thư mục ==public== là nơi chứa các file mình muốn public ra ngoài như file css, file ảnh 
> - Thư mục ==src== là nơi lưu chữ source code
> - File ==vite.config.js== nơi config dự án

### Component
>[!note] 
> 1. Định nghĩa
> 	- Component, suy cho cùng, là javascript function
> 		Tên file: .js , .jsx, .ts, .tsx - [[00. Thắc mắc khi học#^6d734f|Phân biệt]]
> 	- Gồm 2 thành phần:
> 		+ logic javascript
> 		+ template (jsx)
> 		=> Component >< HTML ở chỗ, có thể code được javascript bên trong html
> 		
> >[!EXAMPLE]
> >
> >```tsx
> >const MyFirstComponent = () => {
> >
> >  return (
> >    <div>
> >      My First Component
> >    </div>
> >  )
> >}
> >
> >export default MyFirstComponent
> >```
> 1. Nguyên tắc 
> 	- Tên phải viết hoa chữ cái đầu
> 	-  Có thể gọi bằng tên <Tên/> hoặc gọi đầy đủ <Tên></Tên>
> 	-  Chưa giỏi, chưa master thì nên viết component một cách đầy đủ ko nên viết inline,...
> 2. Import/ Export Component
> 	- Import/Export là cách "reuse - tái sử dụng" functions/variables giữa các "file" của javascript
> 	- Export default là export mặc định của 1 component, thì khi mà khai báo export default thì lúc import sẽ không còn dấu {} nữa, mà thay vào đó sẽ luôn là cái default mà mình đã khai báo export bất kể lúc import dùng tên ntn
> 
### React JSX 
>[!note] 
> - File .jsx thì bắt lỗi không chặt bằng tsx
> - Trong khi code JSX thì sử dụng từ khóa className thay vì class khi viết HTML vì mình đang code HTML trong file JavaScript nên nó sẽ bị trùng từ khóa class nếu dùng như thế
> - Khi sử dụng biến thì dùng {} đối với kiểu dữ liệu là String, Number
> - Với kiểu dữ liệu **Object, array, boolean, null/undefined** thì React JSX sẽ không hộ hoặc hỗ trợ ko hoàn toàn, nên khi muốn sử dụng thì cần dùng **JSON.stringify** để chuyển nó về kiểu String
> - Khi muốn dùng style (CSS)  thì dùng **style{ { } }**

### Props
>[!note] 
> 1. **Phân loại component**:
> 	1. Có 2 loại là parent and child
> 2. Props là viết tắt của properties
> 3. Dùng props trong type script sẽ được gợi ý và check lỗi chứ ko tù mù như dùng trong java script
> 4. Cách truyền props vào component ![[Pasted image 20260512161255.png]]
> 	![[Pasted image 20260512161520.png]]
> 5.  Cài React Dev-Tool
###  Render & Re-render
>[!note] 
> 1. **Định nghĩa**: Là quá trình vẽ và vẽ lại giao diện của trang web thôi
> 2. Rendering Lists
> 	- Là render danh sách data, dùng vòng lặp map chứ ko phải các vòng lặp khác để không làm thay đổi dữ liệu của Lists, tránh trường hợp re-render không mong muốn
> 3. Key 
> 	1. Định danh cho các thuộc tính cho các con của list, để tránh cảnh bảo eror key trong khi code![[Pasted image 20260512164846.png|633]]![[Pasted image 20260512165004.png]]
> 	2. Tuy nhiên cách dùng này không tối ưu cho hiệu năng, chỉ là cách fix tạm thời, sẽ làm rõ hơn ở những phần sau của khóa học 
> 