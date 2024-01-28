// components
import Header from "./components/Header"
// pages
import Notes from "./features/notes/Notes"

// main
const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <Notes />
    </div>
  )
}

export default App