
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from './components/body/carte'
import Header from  './components/Header/header'
import Footer  from './components/footer/footer';

function App() {
  return (
    <div className='App'>
    <Header/>
    <h1>Nouveaux Produits</h1>
    <Container/>
    <Footer name="nissrin mahan"/>
    </div>
      
   
  );
}

export default App;
