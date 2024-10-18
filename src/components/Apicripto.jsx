import { useEffect, useState } from 'react';
import '../index.css';

function Apicripto() {
  const API_KEY = 'fa5bba60-32ec-4066-805a-6a85e50290d7';
  const [Cripto, setCripto] = useState([]);

  const fetchCripto = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?slug=bitcoin,ethereum,bnb,solana,cardano`, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
    });

    const data = await response.json();
    setCripto(Object.values(data.data)); 
  }; 

  useEffect(() => {
    fetchCripto(); 
  }, []);

  console.log(Cripto); 

  return (
    <>
      <section>
        <div className="container-size-full flex h-[386px] flex-col justify-center items-center py-10 relative">
          <img className="w-[220px] mt-[3rem]" src="./src/assets/imgs/bitcoin.svg" alt="btc logo" />
          <div className="mt-10 text-center">
            <p className="font-bold text-[2rem]">
              Visibilizamos todas las tasas de cambio.
            </p>
            <p className="mt-6">
              Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
            </p>
          </div>
        </div>
      </section>
      <section className="w-[60%] mt-5 mx-auto rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <p className="text-bitcoin-orange text-[1.1rem] font-bold leading-[1.0rem] mb-[15px] mt-[0px] font-DM-Sans">
              Monedas
            </p>
            <div className="w-full">
              <ul className="space-y-2">
                {}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <p className="text-blue-600 text-[1.1rem] font-bold leading-[1.0rem] mb-[15px] mt-[0px] font-DM-Sans">
              Comisiones
            </p>
            <div className="w-full">
              <ul className="space-y-2">
                {}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apicripto; 
