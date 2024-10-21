import { useEffect, useState } from 'react';
import '../index.css';


function Apicripto() {
  const [cripto, setCripto] = useState([]);
  const [error, setError] = useState(null);

  const fetchCripto = async () => {
    try {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano')}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (!data.contents) {
        throw new Error('Respuesta invalida de la url');
      }

      const criptoData = JSON.parse(data.contents);
      
      if (!Array.isArray(criptoData)) {
        throw new Error('Estructura de la url mala');
      }

      setCripto(criptoData);
      console.log('Cripto data:', criptoData);
    } catch (err) {
      console.error('Error fetching crypto data:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCripto();
  }, []);

  
  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <section className="w-[30%] mt-5 mx-auto rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <p className="text-bitcoin-orange text-[1.1rem] font-bold leading-[1.0rem] mb-[15px] mt-[0px] font-DM-Sans">
              Monedas
            </p>
            <div className="w-full">
              <ul className="space-y-2">
              {cripto.map((coin) => (
            <li className='text-[1.1rem] text-start font-bold' key={coin.id}>
              {coin.name}: ${coin.current_price}
            </li>
          ))}
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
