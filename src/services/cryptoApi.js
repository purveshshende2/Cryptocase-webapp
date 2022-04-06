import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cde7c00f22msh430d8d6258ca4a0p18aa1ajsnd158684348d5'
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        })
    })
}); 

export const {useGetCryptosQuery,} = cryptoApi;
