function App() {
  const name = "Akash"
  const year = 2026

  function sayHello() {
    alert("Hello Akash!")
  }

  return (
    <div>
      <h1>{name}'s Portfolio</h1>
      <p>Year: {year}</p>

      <button onClick={sayHello}>Click Me</button>
    </div>
  )
}

export default App
