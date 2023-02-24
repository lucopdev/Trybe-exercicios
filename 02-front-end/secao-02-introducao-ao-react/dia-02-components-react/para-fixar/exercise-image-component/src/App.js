import './App.css';
import Image from './Image';
import cat from './img/cat.jpg';

function App() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Image source={cat} alternativeText="foto de um gato em uma arvore" />
    </main>
  );
}

export default App;
