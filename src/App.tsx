import About from "./components/About/About";
import Cases from "./components/Cases/Cases";
import ContactUs from "./components/ContactUs/ContactUs";
import Electricity from "./components/Electricity/Electricity";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Values from "./components/Values/Values";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Values />

        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
