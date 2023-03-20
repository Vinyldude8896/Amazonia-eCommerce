import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/"> Amazonia</Link>
        </header>
        <main>
          <Routes>
            <Route
              path="/product/:slug"
              element={<ProductScreen></ProductScreen>}
            ></Route>
            <Route path="/" element={<HomeScreen></HomeScreen>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
