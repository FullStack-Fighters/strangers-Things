const COHORT_NAME = "/2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api${COHORT_NAME}`

export const fetchApi = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const data = await response.json()
        return data.data.posts
    } catch (error) {
        console.log(error)
    }

}
fetchApi()