import React from 'react'
import "../../../Styles/Modals/Steps/Step3.scss";

export const Step3 = () => {
  return (
    <div className='step3Continer'>
        <div className='headerStep3'>
            <h1>Resumen</h1>
        </div>
        <div className='invoice'>
            <div className='infoViaje'>
                <div className='logTeletiquete'></div>
                <span>
                    <span>Empresa</span>
                    <h3>Autoboy</h3>
                </span>
                <span>
                    <span>N.Factura</span>
                    <h3>Autoboy</h3>
                </span>
                <span>
                    <span>Hora Salida</span>
                    <h3>Autoboy</h3>
                </span>
                <span>
                    <span>Hora Llegada</span>
                    <h3>Autoboy</h3>
                </span>
                <span>
                    <span>Fechas</span>
                    <h3>6/10/2022 - 7/11/2022</h3>
                </span>
            </div>
            <div className='infoCostos'>
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Costos</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span>Pasaje</span>
                                <h4>Autoboy</h4>
                            </td>
                            <td><h4>10.000</h4></td>
                        </tr>
                        <tr>
                            <td>
                                <span>sillas</span>
                                <h4>4</h4>
                            </td>
                            <td><h4>10.000</h4></td>
                        </tr>
                        <tr>
                            <td>
                                <span>Seguro</span>
                                <h4>Pasajero</h4>
                            </td>
                            <td><h4>10.000</h4></td>
                        </tr>
                        <tr>
                            <td>
                                <span>Seguro</span>
                                <h4>Reembolzo</h4>
                            </td>
                            <td><h4>10.000</h4></td>
                        </tr>
                        
                    </tbody>
                    <div><h4>Total : 40.000</h4></div>
                </table>
            </div>
            <div className='infoPasajeroContainer'>
                <div className='codigoQR'>
                    QR
                </div>
                <div className='infoP'>
                    <span>
                        <span>Nombre</span>
                        <h3>AJ</h3>
                    </span>
                    <span>
                        <span>Apellido</span>
                        <h3>QP</h3>
                    </span>
                    <span>
                        <span>Sillas</span>
                        <h3>
                            3,4,5,6
                        </h3>
                    </span>
                </div>
            </div>
        </div>
        <div className='seguros'>
            <div>
                <span>
                    <span>seguro</span>
                    <h3>Pasajero</h3>
                </span>
                <input type="checkbox" name="" id="" />
            </div>
            <div>
                <span>
                    <span>seguro</span>
                    <h3>Reembolso</h3>
                </span>
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    </div>
  )
}
