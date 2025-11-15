import DataImage from "./data";

function App() {
  

  return (
    <>
      <div className="hero">
        <div>

        </div>
        <img src={DataImage.HeroImage} alt="hero image" className="w-full h-auto md:h-[600px] object-cover rounded-3xl shadow-lg shadow-black/30"/>
      </div>
    </>
  )
}

export default App
