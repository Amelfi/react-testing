import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirstStepApp } from './FirstStepApp.tsx';
// import { MyAwesomeApp } from './MyAwesomeApp.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <FirstStepApp/>
   {/* <MyAwesomeApp/> */}
  </StrictMode>,
)
