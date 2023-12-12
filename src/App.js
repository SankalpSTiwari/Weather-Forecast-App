import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      <h1>Weather Forecast</h1>
      <Input />
      <Button value='Search' />
      <Card />
      <Button value='Refresh' />
    </div>
  );
}

export default App;
