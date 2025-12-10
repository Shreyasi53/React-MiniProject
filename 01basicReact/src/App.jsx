import Test from "./test";
function App() {
  const username = "Chai aur code"
//{username} is called evaluated expression 
  return (
    <>
      <Test/>
      <h1>chai aur react {username}</h1>  
    </>
    
  )
}

export default App
