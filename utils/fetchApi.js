import axios from "axios";



export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {

        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'cfff7179bfmsh6470f9ec6941dbap199eb4jsn914efde022db'
        }

    })

    return data
}