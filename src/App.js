import './App.css';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Avatar from './components/Avatar/Avatar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <div className="avatars-container d-flex gap-3 justify-content-center align-items-start flex-wrap">
        <Avatar id= {1} name= "Alan"/>
        <Avatar id= {6} name= "Emiliano"/>
        <Avatar id= {7} name= "Vaquita"/>
        <Avatar id={8} name="Suazo"/>
      </div>
      <Form />
    </>
  );
}

export default App;
