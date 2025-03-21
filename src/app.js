import React from 'react'
import ReactDOM from 'react-dom/client'

const AppLayout = () =>{
    return <div className='text-3xl text-green-500'>
    Hello World
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)