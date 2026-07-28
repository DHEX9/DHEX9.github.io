import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import EmailToast from "./components/EmailToast";

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Projects também renderiza a seção de Contato dentro dela,
            replicando a estrutura original (#contact aninhado em #projects). */}
        <Projects />
      </main>
      <Footer />
      <EmailToast />
    </AppProvider>
  );
}
