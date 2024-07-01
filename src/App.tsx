import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import LearnMoreBtn from "./components/LearnMoreBtn/LearnMoreBtn";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <LearnMoreBtn title="Learn more" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
