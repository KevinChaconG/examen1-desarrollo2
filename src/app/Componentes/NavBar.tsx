'use client'
import React from 'react'
import Link from 'next/link'
import { usuarioContext } from '../Provider/ProviderUsuario'

export default function NavBar() {

    const { nombreUsuario } = usuarioContext()

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/PresupuestoMensual">Examen I</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/PresupuestoMensual">Presupuesto Mensual</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/RegistroGastos">Registro de Gastos</Link>
                            </li>
                        </ul>
                    </div>
                    <p className='nav-item'>Usuario Conectado: {nombreUsuario}</p>
                </div>
            </nav>

        </>
    )
}
