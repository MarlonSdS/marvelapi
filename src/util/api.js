import md5 from 'md5'


//constantes necessárias para estabelecer a conexão com a api

export const baseUrl = `http://gateway.marvel.com/v1/public/comics`
export const publicKey = `33f8b1d5369368cdf2cf55ec6cd1fbb0`
export const privateKey = `4d45be370d81f5d5fcaee4777969f3b64ecf7d63`
export const time = Number(Date.now())
export const hash = md5(time + privateKey + publicKey)

//url principal já completa caso necessário
export const fullUrl = `${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`

const Api = {
    baseUrl: baseUrl,
    publicKey: publicKey,
    privateKey: privateKey,
    time: time,
    hash: hash,
    fullUrl: fullUrl
}

export default Api