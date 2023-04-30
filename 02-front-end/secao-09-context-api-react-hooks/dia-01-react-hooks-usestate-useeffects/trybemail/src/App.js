
import './App.css';
import EmailList from './components/emailList/EmailList';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <h1>TrybeMail</h1>
      <Header />
      <EmailList />
    </div>
  );
}

export default App;
