// components
import Header from "./components/Header"
// pages
import Posts from "./features/posts/Posts"

// main
const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <Posts />
    </div>
  )
}

export default App