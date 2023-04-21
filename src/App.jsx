import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Page />
      <About />
      <Education />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
};

export default App;
