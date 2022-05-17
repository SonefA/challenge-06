import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RouterDefault } from '../Router/RouterDefault'


export const Layout = () => {
  return (
    <div>
        <>
            <BrowserRouter>
                <RouterDefault/>
            </BrowserRouter>
        </>
    </div>
  )
}
