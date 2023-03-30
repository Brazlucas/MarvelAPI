import axios from "axios"

class MarvelService {
  public getCharacters() {
    const public_key = "a6f627a3f7e699dc7abc1512693aabcf"
    const private_key = "d612bcbbb9dd12ef1ecec68291f79ca97cbaef69"
    const API_URL = (`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)

    return axios.get(API_URL).then((results) => {
      return results.data
    })
  }

}

export default new MarvelService();