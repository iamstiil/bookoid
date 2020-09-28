import { useBooks } from '../api';

const HomePage: React.FC = () => {
  const { isLoading, isError, data: books, error } = useBooks();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  return (
    <div>
      <header className="bg-white shadow-xs p-4">Bookoid</header>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
