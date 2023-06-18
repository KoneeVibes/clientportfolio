import { ThemeProvider } from '@mui/material';
import './App.css';
import { Hero } from './Components/Hero';
import { Nav } from './Components/Nav';
import { theme } from './Theme';
import { About } from './Components/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Hero />
      <About />
    </ThemeProvider>
  );
}

export default App;
