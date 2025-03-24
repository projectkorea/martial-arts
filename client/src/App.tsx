import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Start from './pages/Start';
import Question from './pages/Question';
import Result from './pages/Result';
import MBTIResult from './pages/MBTIResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/question',
    element: <Question />,
  },
  {
    path: '/result/:id',
    element: <Result />,
  },
  {
    path: '/mbti/:type',
    element: <MBTIResult />,
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
