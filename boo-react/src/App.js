import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
