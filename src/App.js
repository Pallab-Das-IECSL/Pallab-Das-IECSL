import logo from './logo.svg';
//import './App.css';
import "../src/assets/vendor/fontawesome-free/css/all.min.css";
import Navbar from './Component/Navbar/Navbar';
import '../src/assets/vendor/bootstrap/css/bootstrap.min.css';
import "../src/assets/vendor/aos/aos.css";
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/boxicons/css/boxicons.min.css";
import "../src/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/assets/vendor/remixicon/remixicon.css";
import "../src/assets/vendor/swiper/swiper-bundle.min.css";
import '../src/assets/css/style.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
    </div>
  );
}

export default App;
