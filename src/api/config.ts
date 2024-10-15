import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://api.nbp.pl/api/',
  headers: {
    Accept: 'application/json'
  }
})

export const getRequest = async <T>(path: string): Promise<T> => {
  const response = await client.get(path)
  return response.data as T
}
