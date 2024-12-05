import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import './index.css'
import Routes from './Routes/Routes'



ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RecoilRoot >
    <div className='w-full h-full flex flex-col items-center bg-inherit min-w-90 min-h-96 px-2 md:px-[10vw]'>
      <Routes />
    </div>
    </RecoilRoot>
  </React.StrictMode>
)
