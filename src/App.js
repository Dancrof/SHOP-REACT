import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AppRouter from "./router/AppRouter";

function App() {
  
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '70px 1fr 1fr', gridGap: '1rem'}}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
