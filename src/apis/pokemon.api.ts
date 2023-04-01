import { NamePokemon, Pokemon } from '../types/category.type'
import http from '../util/http'
import { ProductListPokeconfig } from './../types/productListPoke.type'

export const URL = 'pokemon'

const pokemonApi = {
  getCategory(params: ProductListPokeconfig) {
    return http.get<NamePokemon>(URL, {
      params
    })
  },
  getCategoryDetail(name: string) {
    return http.get<Pokemon>(`${URL}/${name}`)
  }
}
export default pokemonApi
