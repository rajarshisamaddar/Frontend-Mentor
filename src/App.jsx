import Footer from "./components/Footer";
import Results from "./components/Results";
import Summary from "./components/Summary";
function App() {
  return (
    <>
      <div className="page-center">
        <div className="result-summary">
          <Results />
          <Summary />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
