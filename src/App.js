import './App.css';
import List from './components/list';

function App({ items }) {
  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;
