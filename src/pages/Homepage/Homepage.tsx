/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import pokemonApi, { URL } from '../../apis/pokemon.api'
import { ProductListPokeconfig } from 'src/types/productListPoke.type'
import { NamePokemon } from 'src/types/category.type'
import axios from 'axios'

export default function Homepage() {
  const queryConfig: ProductListPokeconfig = { limit: '20', offset: '20' }
  const { data } = useQuery({
    queryKey: ['categoiesPoke'],
    queryFn: () => {
      // data?.data.results.forEach(async (pokemon: NamePokemon) => {
      //   const poke = await axios.get(`https://pokeapi.co/api/v2/${URL}/${pokemon.name}`)
      //   setPokemons((p) => [...p, poke.data])
      // })
      return pokemonApi.getCategory(queryConfig)
    },
    keepPreviousData: true
  })

  const { data: getDetailPoke } = useQuery({
    queryKey: ['detailPoke'],
    queryFn: () => {
      return data?.data.results.map((listData) => {
        pokemonApi.getCategoryDetail(listData.name)
      })
    },
    keepPreviousData: true
  })
  console.log(getDetailPoke)
  return (
    <div>
      {getDetailPoke?.map((namePokemon, index) => (
        <div key={index}>{}</div>
      ))}
    </div>
  )
}
