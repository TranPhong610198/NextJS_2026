>[!note] **Tổng Quan**
> - Cần tích hợp thư viện **React Router** (Thư viện điều hướng trang)
> - Cài đặt thu viện: npm i --save-exact react-router-dom@6.15.0


> [!warning] 
> Trang tài liệu sẽ ko đọc đc đúng version đc - [**Trang React Router**](https://reactrouter.com/home)


> [!note] **Khởi tạo một Browser Router**
> ```tsx
> import * as React from "react";
> import * as ReactDOM from "react-dom/client";
> 
> // Import
> import { 
>   createBrowserRouter,
>   RouterProvider,
> } from "react-router-dom";
> //_____________________________________
> 
> import "./index.css";
> 
> // Khai báo các router
> const router = createBrowserRouter([
>   {
>     path: "/",
>     element: <div>Hello world!</div>,
>   },
> ]);
> //_____________________________________
> 
> ReactDOM.createRoot(document.getElementById("root")).render(
>   <React.StrictMode>
>     <RouterProvider router={router} />
>   </React.StrictMode>
> );
> 
> ```

