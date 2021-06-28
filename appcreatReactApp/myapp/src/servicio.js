const URL = "https://vetappback.vercel.app"
export const listarEntidad = async ({entity = "pets"}) =>{

    try {
        const rta = await fetch(`${URL}/${entity}`)
        
        const data = await rta.json()
        return data
    } catch (error) {
        throw error
    }

}

export const crearEntidad = async ({entity = "pets", object = {}, method = 'POST', idObject=null}) =>{

    try {
        let url = null
        if(method == 'PUT' && (idObject != 0 || idObject ==0)){
            url = `${URL}/${entity}/?indice=${idObject}`
            
        }else if(method == 'POST'){
            url = `${URL}/${entity}`
        }

        if(!url){
     
            throw new Error('Invalid Url')
        }

        const rta =await fetch(url,{
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(object),
            mode:"cors",
        })
        

        const data = await rta.json()
        return data
    } catch (error) {
        throw error
    }

}

export const eliminarEntidad = async ({entity = "pets", idObject=null}) =>{

    try {
        
        if(idObject || idObject === 0){
            const rta = await fetch(`${URL}/${entity}/?indice=${idObject}`,{
                method:'DELETE'
            })
         
            const data = await rta.json()
            return data
        }else{
            
            throw new Error('no Id')
        }
        
    } catch (error) {
        throw error
    }

}