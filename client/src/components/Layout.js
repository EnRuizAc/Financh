import { Outlet } from "react-router-dom";

//const info = JSON.stringify(response?.data);

const Layout = () => {
  return (
    <main className="App">
      
        <h1>Header</h1>
        <Outlet />
        <h1>Footer</h1>
        
    </main>
  )
}

export default Layout