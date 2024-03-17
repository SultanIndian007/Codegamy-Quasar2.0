// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JoinRoom from './JoinRoom';
import Room from './Room';
import SocketWrapper from './SocketWraper';
import ErrorBoundary from './ErrorBounday'; // Import ErrorBoundary component

const router = createBrowserRouter([
  {
    path: '/code',
    element: <JoinRoom />,
  },
  {
    path: '/code/room/:roomId',
    element: <SocketWrapper><Room /></SocketWrapper>,
  },
]);

function App() {
  return (
    // <ErrorBoundary> {/* Wrap the RouterProvider with ErrorBoundary */}
      <RouterProvider router={router} />
    // </ErrorBoundary>
  );
}

export default App;
