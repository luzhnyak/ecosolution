import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import Faq from "./components/Faq/Faq";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import { ScrollProvider } from "./components/core/ScrollContext";

function App() {
  return (
    <ScrollProvider>
      <div className="container">
        <Header />
        <main>
          <Main />
          <About />
          <Electricity />
          <Cases />
          <Faq />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;
