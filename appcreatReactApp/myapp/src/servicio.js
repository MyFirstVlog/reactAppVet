const URL = "https://vetappback.vercel.app"
export const listarEntidad = async ({entity = "pets"}) =>{

    try {
        const rta = await fetch(`${URL}/${entity}`)
        console.log('link', entity)
        const data = await rta.json()
        return data
    } catch (error) {
        throw error
    }

}

export const crearEntidad = async ({entity = "pets", object = {}, method = 'POST', idObject=null}) =>{

    try {
        let url = null
        if(method === 'PUT' && idObject){
            url += `${URL}/${entity}/?indice=${idObject}`
        }else if(method === 'POST'){
            url += `${URL}/${entity}`
        }

        if(!url){
            throw new Error('Invalid Url')
        }

        const rta =await fetch(`${URL}/${entity}`,{
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