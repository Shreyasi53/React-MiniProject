import Card from './components/card.jsx'
import './index.css'


function App() {

  return (
     <div className="p-10">
      <Card
        image="https://picsum.photos/400/300"
        title="Beautiful Sunset"
        description="A breathtaking sunset view over the mountains."
      />
      <Card/>
    </div>
  )
}

export default App
