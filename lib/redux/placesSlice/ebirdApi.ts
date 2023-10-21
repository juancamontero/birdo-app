import axios from "axios"

const ebirdApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EBIRD_URL as string,
  headers: {
    "x-ebirdapitoken": process.env.NEXT_PUBLIC_EBIRD_TOKEN as string,
  },
})

export default ebirdApi
