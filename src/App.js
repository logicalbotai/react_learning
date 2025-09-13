// import logo from './logo.svg';
import './App.css';
import Cards from "./components/Cards"
import Navbar from './components/Navbar';

function App() {
  // put items in array and use map function to render cards
  const items = [
    { id: 1, cardname: "anurag", image_src: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg" },
    { id: 2, cardname: "anurag", image_src: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg" },
    { id: 3, cardname: "anurag", image_src: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg" },
  ];

  return ( 
    <>
    <Navbar/>
  <div className="d-flex gap-4 justify-content-center pt-5">
    {items.map(item => (<Cards key={item.id} cardname={item.cardname} image_src={item.image_src} />))}
   </div>
   </>)
}

export default App;

