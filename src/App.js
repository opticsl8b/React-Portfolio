import "./App.css";
import Header from "./componets/Header";
import Home from "./componets/Home";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Qualifications from "./componets/Qualifications";
import Service from "./componets/Service";
import Portfolio from "./componets/Portfolio";
import ContactMe from "./componets/ContactMe";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualifications />
      {/* <Service /> */}
      <Portfolio />
      <ContactMe />
    </>
  );
}

export default App;
