import Navbar from "./components/Navbar/Navbar"
import ResposiveMenu from "./components/Navbar/ResposiveMenu"

const App = () => {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Navbar />
        <ResposiveMenu />
      </main>
      
    </div>
  )
}

export default App
