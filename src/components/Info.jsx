function Info() {
  const batataLogo = '/assets/icons/batata.svg';
  const clockIcon = '/assets/icons/clock.svg';
  const eyeIcon = '/assets/icons/eye.svg';
  const dollarSignIcon = '/assets/icons/dollar-sign.svg';
  const checkCircleIcon = '/assets/icons/check-circle.svg';
  const backgroundImage = '/assets/imgs/bitcoinbaby2.png';

  return (
    <>
      <section className="bg-warm-black w-full md:h-[686px] lg:h-[686px] xl:h-[686px] 2xl:h-[686px] ">
        <img src={batataLogo} alt="batata" className="w-[50px] place-self-center mb-9 -translate-y-4" />
        <p className="text-white font-bold text-3xl text-center">Creamos un producto sin comparación.</p>
        <p className="text-white text-lg text-center">Confiable y diseñado para su uso diario.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 p-10 mt-10 w-[100%] ">
          <div className="bg-black-batata rounded-sm mx-auto text-stone-50 w-[100%]">
            <img src={clockIcon} alt="clock" className="mt-4 ml-5" />
            <p className="ml-5 mt-4 font-bold text-xl">Tiempo real</p>
            <p className="ml-5 mt-4 font-bold text-md mb-6">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
          </div>

          <div className="bg-black-batata rounded-sm mx-auto text-stone-50 w-[100%]">
            <img src={eyeIcon} alt="eye" className="mt-4 ml-5" />
            <p className="ml-5 mt-4 font-bold text-xl">No hay tasas escondidas</p>
            <p className="ml-5 mt-4 font-bold text-md mb-6">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
          </div>

          <div className="bg-black-batata rounded-sm mx-auto text-stone-50 w-[100%]">
            <img src={dollarSignIcon} alt="dollar" className="mt-4 ml-5" />
            <p className="ml-5 mt-4 font-bold text-xl">Compara monedas</p>
            <p className="ml-5 mt-4 font-bold text-md mb-6">No más rumores, con Batabit sabrás el valor real de cada moneda en el mercado actual.</p>
          </div>
          
          <div className="bg-black-batata rounded-sm mx-auto text-gray-100 w-[100%]">
            <img src={checkCircleIcon} alt="check" className="mt-4 ml-5" />
            <p className="ml-5 mt-4 font-bold text-xl">Información confiable</p>
            <p className="ml-5 mt-4 mb-6 font-bold text-md">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
          </div>
        </div>
      </section>
      
      <section className="h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2 className="text-gray-100 text-[2.8rem] font-bold mr-20 text-center pt-[50px]">Conócelo hoy</h2>
      </section>
    </>
  );
}

export default Info;
