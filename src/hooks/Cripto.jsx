import { useState, useEffect } from "react";
function Cripto() {  const [cripto, setCrypto] = useState([])
    const [error, setError] = useState(null)
  
    useEffect(() => {
      fetch('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,cardano,solana')
        .then((response) => {
          if (!response.ok) {
            throw new Error('La respuesta de la red no fue correcta')
          }
          return response.json()
        })
        .then((data) => {
          if (data.data && Array.isArray(data.data)) {
            setCrypto(data.data)
          } else {
            throw new Error('Estructura de datos inesperada')
          }
        })
        .catch((error) => {
          console.error('Error al obtener datos de criptomonedas:', error)
          setError(error.message)
        })
    }, [])
  
    if (error) {
      return <div className="text-red-500 font-bold text-center mt-4">Error: {error}</div>
    }

    return cripto
  }  

  export default Cripto;