import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CheckOut = ({data}) => {

    const [preferenceId, setPreferenceId] = useState(null);
    
    useEffect(() => {
      initMercadoPago("TEST-01b85ce2-7a0b-41fa-aedb-2ac457f4e6da", { locale: 'es-AR' });
    
      axios.post("/payment/checkOut", null, { withCredentials: true })
        .then(response => {
          console.log(response);
          setPreferenceId(response.data.id);
        })
        .catch(error => {
          console.error('Error al obtener el preferenceId:', error);
        });
    }, [data]);

    return (
      <div>
   <Wallet initialization={{ preferenceId : preferenceId  }} />
      </div>
    );
};

export default CheckOut;
        