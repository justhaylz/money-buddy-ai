import useSWR from 'swr';
import './App.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data, error } = useSWR('/api/hello', fetcher);

  if (error) return <div className="text-red-500">Failed to load</div>;
  if (!data) return <div className="text-blue-500">Loading...</div>;

  return (
    <div className="App">
      <header className="App-header bg-gray-800 text-white p-4">
        <h1 className="text-2xl">{data.message}</h1>
      </header>
    </div>
  );
}

export default App;
