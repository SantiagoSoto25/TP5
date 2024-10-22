import "../index.css";
import { Link } from "react-scroll";
function Header() {
    return (
        <div className="container-size-full flex h-[386px] flex-col justify-center items-center py-10 bg-gradient-to-r from-bitcoin-orange to-black relative">
            <div className="flex items-center">
                <img className="w-20 mr-5" src="./src/assets/icons/batata.svg" alt="logo" />
                <h1 className="text-orange-400 text-5xl font-semibold mr-4">Batatabit</h1>
            </div>
            <p className="text-white mt-9 font-bold text-3xl text-center">
                La próxima revolución en el intercambio de criptomonedas.
            </p>
            <p className="text-gray-300 text-base mt-5 font-semibold text-center">
                Batatabit te ayuda a navegar entre los diferentes precios y tendencias.
            </p>
            <button className="absolute -bottom-[24px] left-1/2 transform -translate-x-1/2 bg-white px-4 py-3 w-[250px] h-[60px] rounded-md shadow-md font-bold text-black text-base flex items-center justify-between">
                <Link to="planes" spy={true} smooth={true} offset={50} duration={500}>Conoce Nuestros Planes</Link>
                <img src="./src/assets/icons/down-arrow.svg" alt="arrow" />
            </button>
        </div>
    );
}

export default Header;
