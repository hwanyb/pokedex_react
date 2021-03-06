import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from 'react-query';


const pokemonApi = (id?: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id||''}`, {params:{ limit: 151}});

const usePokemonQuery = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> => useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id))

export default usePokemonQuery;