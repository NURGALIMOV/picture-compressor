import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="relative flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white">
      <main className="flex-1">
        <MainContent />
      </main>
    </div>
  );
}

export default App;
