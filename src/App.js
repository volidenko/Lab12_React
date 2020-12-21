import logo from './logo.svg';
import './App.css';
import Quote from './Quote';
import RandomNumber from './RandomNumber';
import ItemList, {ListItem} from './ItemList';
import List from './ItemList';


function App() {
  let quote = "Какая-то интересная и умная цитата";
  let author = "Уильям Шекспир";
  let listData = {
    title: "Список предстоящих праздников",
    items: ["День Святого Николая", "Католическое Рождество", "Новый год", "Рождество"]
  }
  return (
    <>
      <Quote text={quote} author={author}></Quote>
      <Quote></Quote>

      {/* <RandomNumber min={3} max={10}></RandomNumber> */}
      {/* <List data={listData}></List> */}
    </>
  );
}

export default App;
