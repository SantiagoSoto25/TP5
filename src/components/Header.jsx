import "../index.css";

function Header() {
    return (
        <>
        <div className="container-size-full flex flex-col justify-center items-center py-10 bg-gradient-to-r from-bitcoin-orange to-black">
            <div className="flex items-center">
                <img className="w-20 mr-5" src="./src/assets/icons/batata.svg" alt="logo" />
                <h1 className="text-orange-400 text-5xl font-semibold mr-4">Batatabit</h1>
            </div>
            <p className="text-white mt-2 text-4xl text-center">La próxima revolución en el intercambio de criptomonedas.</p>
            <p className="text-gray-300 text-sm text-center">Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
        </div>
        </>
    );
}

export default Header


