import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { DeliverypaymentPage } from './pages/DeliverypaymentPage/deliverypaymentPage.tsx';
import { DeparturefromPage } from './pages/DeparturefromPage/departurefromPage.tsx';
import { DestinationPage } from './pages/DestinationPage/destinationPage.tsx';
import { MainPage } from './pages/MainPage/mainPage.tsx';
import { RecepientPage } from './pages/RecepientPage/recepientPage.tsx';
import { SenderPage } from './pages/SenderPage/senderPage.tsx';
import { ShippingMethodPage } from './pages/ShippingMethodPage/shippingMethodPage.tsx';
import { VerificationPage } from './pages/VerificationPage/verificationPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/shipping',
        element: <ShippingMethodPage />,
      },
      {
        path: '/recepient',
        element: <RecepientPage />,
      },
      {
        path: '/sender',
        element: <SenderPage />,
      },
      {
        path: '/departurefrom',
        element: <DeparturefromPage />,
      },
      {
        path: '/destination',
        element: <DestinationPage />,
      },
      {
        path: '/deliverypayment',
        element: <DeliverypaymentPage />,
      },
      {
        path: '/verification',
        element: <VerificationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
