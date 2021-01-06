import "./App.css";
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sub-header">
        <p>Your Photo Gallery</p>
      </div>
      <UploadForm />
    </div>
  );
}

export default App;
