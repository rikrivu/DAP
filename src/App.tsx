import './App.scss';
import Header from './component/Header/Header';
import ViewPort from './component/ViewPort/ViewPort';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-wrapper">
        <ViewPort/>
      </div>
    </div>
  );
}

export default App;
