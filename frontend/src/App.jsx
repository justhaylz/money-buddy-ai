import useSWR from 'swr';
import './App.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data, error } = useSWR('/api/hello', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.message}</h1>
      </header>
    </div>
  );
}

export default App;
