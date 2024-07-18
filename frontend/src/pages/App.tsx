import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import Trial from './Trial.tsx';
import Registration from './Registration.tsx';
import Login from './Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/chats',
    element: <div> Chats </div>,
  },
  {
    path: '/design',
    element: <Trial />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <main className="dark text-foreground bg-gradient-to-br from-start to-end h-full w-full">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
