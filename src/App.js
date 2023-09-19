
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';





function App() {
  return (
    <div className="App">
   
      <NavBar />  
      <ItemListContainer greeting={'Bienvenidos a MaxEcommerce tu Punto de partida!'} />
    </div>
  );
}

export default App;
