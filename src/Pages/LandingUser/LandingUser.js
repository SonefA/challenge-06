import React from 'react'
import { NavbarUser } from '../../Asset/Components/NavbarUser/NavbarUser'
import "./LandingUser.scss"

export const LandingUser = () => {
  return (
    <>
    <NavbarUser/>
        <div className="container-pencarian">
      <div className="main">
        <div className="main-left">
          <h1>
            Sewa & Rental Mobil Terbaik di <br /> kawasan (Lokasimu){" "}
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas{" "}
            <br /> terbaik dengan harga terjangkau. Selalu siap melayani
            kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
          </p>
          <a class="btn-sewa1" href="https://google.com">MULAI SEWA MOBIL</a>
        </div> 

        <div className="main-right"></div>
      </div>
    </div>
    </>
  )
}
