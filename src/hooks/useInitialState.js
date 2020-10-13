import { useState, useEffect } from 'react'

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState({ 'mylist': [], 'trends': [], 'originals': [] });
    useEffect( () => {
        fetch(API)
            .then( response =>  response.json()  )
            .then( data =>  setVideos(data) )
    }, [])
    //el segundo argumento es una propiedad que puede poner a escuchar a useEffect del agun evento para volver  ejecutarse,
    //Como no queremos eso ahora, ponemos un arreglo vacio puesto que si no le pasamos nada, se creara un bucle infinito.
    return videos;
}

export default useInitialState