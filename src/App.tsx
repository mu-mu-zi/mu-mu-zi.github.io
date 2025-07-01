import Root from './router';
import Header from './components/Header';

function App() {
  return (
    <div className="text-text1 bg-bg1 min-h-screen">
      <div className="mx-auto flex h-full w-[1200px] flex-col gap-5 px-6">
        <Header />
        <Root />
      </div>
    </div>
  );
}

export default App;
