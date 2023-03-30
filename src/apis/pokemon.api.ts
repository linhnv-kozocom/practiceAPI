import { namePokemon } from "../types/category.type"
import { SuccesResponse } from "../types/utils.type"
import http from "../util/http"

const URL = 'pokemon'

const pokemonApi = {

  getCategory() {
    console.log(http)
    return http.get<SuccesResponse<namePokemon[]>>(URL)
  }
}
export default pokemonApi