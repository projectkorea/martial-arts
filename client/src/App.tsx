import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Start from './pages/Start';
import Question from './pages/Question';
import Result from './pages/Result';
import Loading from './components/Loading';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/loading',
    element: <Loading />,
  },
  {
    path: '/question',
    element: <Question />,
  },
  {
    path: '/result/:type',
    element: <Result />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
