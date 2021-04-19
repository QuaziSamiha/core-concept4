import logo from './logo.svg';
import './App.css';

function App() {

  const foodList = ['Kalojam', 'Dim', 'Kabab & Porata'];
  const foodDay = [{ name: 'Patisapta', day: 2 }, { name: 'Puding', day: 4 }, { name: 'kalavuna', day: 2 }];

  return (
    <div className="App">

      <Favorite food="Biriyani" day="4"></Favorite>
      <Favorite food="Pasta"></Favorite>
      <Favorite food="Halim"></Favorite>
      <Favorite food="Oats"></Favorite>
      <Favorite food={foodList[2]}></Favorite>

      {
        foodList.map(fd => <Favorite food={fd} day="6"></Favorite>)
      }

      {
        foodDay.map(fdDay => <Favorite food={fdDay.name} day={fdDay.day}></Favorite>)
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

function Favorite(props) {
  // console.log(props);
  const foodStyle = {
    border: 'pink solid 2px',
    borderRadius: '10px',
    margin: '10px'
  };
  return (
    <div style={foodStyle}>
      <h2>I want to eat {props.food}</h2>
      <h5>I love animals and food</h5>
      <p>I want to eat {props.food} {props.day || 'everyday'} days</p>
    </div>
  );
}

export default App;
