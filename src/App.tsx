import { ThemeProvider } from '@mui/material';
import './App.css';
import { Hero } from './Components/Hero';
import { Nav } from './Components/Nav';
import { theme } from './Theme';
import { About } from './Components/About';
import { Clients } from './Components/Clients';
import { Projects } from './Components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Hero />
      <About />
      <Clients />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
