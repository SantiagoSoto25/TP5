function Planes() { 

return (
<>
<section className="bg-white w-full sm:h-[986px] md:h-[986px]  lg:h-[686px] xl:h-[686px] 2xl:h-[686px] p-10 text-center  flex flex-col items-center relative">

    <p className="text-black font-bold text-3xl">Escoge el plan que mejor se ajuste a ti.</p>
    <p className="text-black text-lg mt-5">Cualquier plan te da acceso completo a nuestra plataforma.</p>

    <div className="overflow-x-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 mt-10 w-[100%] mx-auto items-start">
        <div className="mt-10">
            <p className="mb-4 font-bold text-[1.1rem]">Pago Mensual</p>
            <p className="text-6xl font-bold">$15</p>
            <p className="text-sm mt-6">*Plan básico para mantenerte informado.</p>
            <button className="px-4 mt-4 py-2 border-2 border-bitcoin-orange text-black rounded-md hover:bg-orange-50 font-bold">
            Escoge este <span className="text-bitcoin-orange ml-2">→</span>
            </button>
        </div>
        <div className="flex flex-col items-center">
            <p className="bg-bitcoin-orange text-white font-bold p-2 rounded-md w-[40%] text-[0.7rem]  mx-auto">
                Recomendado
            </p>
            <p className="mb-4 mt-3 font-bold text-[1.1rem]">Pago Anual</p>
            <p className="text-6xl font-bold">$49</p>
            <p className="text-sm mt-6">*Ahorras $129 comparado al plan mensual.</p>
            <button className="px-4 mt-4 py-2 border-2 border-bitcoin-orange text-black rounded-md hover:bg-orange-50 font-bold">
            Escoge este <span className="text-bitcoin-orange ml-2">→</span>
            </button>
        </div>
        <div className="mt-10">
            <p className="mb-4 font-bold text-[1.1rem]">Acceso de por vida</p>
            <p className="text-6xl font-bold">$99</p>
            <p className="text-sm mt-6">*Ahorras $999+ comparado al plan anual.</p>
            <button className="px-4 mt-4 py-2 border-2 border-bitcoin-orange text-black rounded-md hover:bg-orange-50 font-bold">
            Escoge este <span className="text-bitcoin-orange ml-2">→</span>
            </button>
        </div>
    </div>
</div>


    </section>






    </>
    )

}

export default Planes