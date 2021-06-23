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