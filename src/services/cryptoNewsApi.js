//creating new service for news API
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
//bing news API
const cryptoNewsHeaders = {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'cde7c00f22msh430d8d6258ca4a0p18aa1ajsnd158684348d5'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query:({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`) //url string
        })
    })
}); 

export const {useGetCryptoNewsQuery} = cryptoNewsApi;



