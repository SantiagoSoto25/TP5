import Cripto from '../hooks/Cripto.jsx';
import '../index.css';
import Tiempo from '../hooks/Tiempo';

function Apicripto() {
  const tiempo = Tiempo();
  const cripto = Cripto();
  const bitcoinLogo = '/assets/imgs/Bitcoin.svg';
  return (
    <>
      <section>
        <div className="container-size-full flex h-[386px] flex-col justify-center items-center py-10 relative">
          <img className="w-[220px] mt-[3rem]" src={bitcoinLogo} alt="btc logo" />
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
      <section className="w-[30%] max-lg:w-[60%] max-md:w-[90%]  max-sm:w-[90%] mt-8 mx-auto rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <p className="text-bitcoin-orange text-[1.1rem] font-bold leading-[1.0rem] mb-[15px] mt-[0px] font-DM-Sans">
              Monedas
            </p>
            <div className="w-full">
              <ul className="space-y-2">
              {cripto.map((coin) => (
            <li className='text-[1.1rem] text-start font-bold' key={coin.id}>
              {coin.name}: ${parseFloat(coin.priceUsd).toFixed(2)}
            </li>
            ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <p className="text-blue-600 text-[1.1rem] font-bold leading-[1.0rem] mb-[15px] mt-[0px] font-DM-Sans text-center">
              Los Mejores Exchanges
            </p>
            <div className="w-full ">
              <ul className="space-y-2">
                 <button onClick={()=>{ console.log("redirigiendo a Binance"); window.location.href="https://www.binance.com/";}} className='text-[1.1rem] text-start font-bold hover:underline'>
                  Binance
                 </button>
                 <br></br>
                 <button onClick={()=>{ console.log("redirigiendo a Kraken"); window.location.href="https://www.kraken.com/es-es";}} className='text-[1.1rem] text-start font-bold hover:underline'>
                 Kraken
                 </button>
                 <br></br>
                 <button onClick={()=>{ console.log("redirigiendo a Crypto.com"); window.location.href="https://crypto.com/";}}className='text-[1.1rem] text-start font-bold hover:underline'>
                 Crypto.com
                 </button>
                 <br></br>
                 <button onClick={()=>{ console.log("redirigiendo a Coinbase"); window.location.href="https://www.coinbase.com/es-la/";}}className='text-[1.1rem] text-start font-bold hover:underline'>
                 Coinbase
                 </button>
              </ul>
            </div>
          </div>
        </div>
    <p className='font-bold items-center mt-5 text-center'>Actualizado: {tiempo}</p>
      </section>
    </>
  );
}

export default Apicripto; 
