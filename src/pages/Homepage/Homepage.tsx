import { useQuery } from '@tanstack/react-query'
import pokemonApi from '../../apis/pokemon.api'


export default function Homepage() {
  const {data} = useQuery({
    queryKey: ['categoiesPoke'],
    queryFn: () => {
      return pokemonApi.getCategory()
    },
    keepPreviousData: true
  })

  const ListItemPokemon = data?.data.results
  console.log(ListItemPokemon);

  return (
    <div>
    { ListItemPokemon?.map((namePokemon, index)=> (
      <div key={index}>
        {namePokemon.name}
   
      </div>
    ))}
    </div>
  )
}
