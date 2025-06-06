export const getApiData = async (endpoint) => {
    try {
        const url = new URL(`http://dnc-react-api.vercel.app/files/${endpoint}`)
        const response = await fetch(url, {
            method: 'GET',              
        })

        if (!response.ok) {
            console.error(`Error: ${response.status}`)
        }

        const data = await response.json()
        
        return data
    } catch (e){
        throw('Catch error: ', e)
    }
}