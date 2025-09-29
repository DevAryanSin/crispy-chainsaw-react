import './App.css'
import Card from './components/Card'

function App() {

  // let myObj ={
  //   username: "Aryan",
  //   age: 21
  // }

  let myArr = [1,2,3]
  return (
    <>
    <h1 className = 'text-black bg-green-400 p-4 rounded-xl mb-4'> Tailwind </h1>      
    <Card username = "Aryan" someObj = {myArr}/>
    </>
  )
}

export default App
