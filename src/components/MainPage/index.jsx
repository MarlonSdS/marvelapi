import Api from '../../util/api'
import {sizes, formats} from '../../util/imageSizes'
import axios from 'axios'
import { useEffect, useState } from 'react'

import {MainDiv, Card, Infos, ComicName, CreatorName} from './style'
import ComicPage from '../ComicPage'
import Loading from '../Loading'

export default function MainPage(){
    var [comics, setComics] = useState([])
  var [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(Api.fullUrl).then(res => {
      setComics(res.data.data.results)
      console.log(comics)
      setLoading(false)
    })
  }, [])

  if(loading){
    return <Loading />
  }

  return (
    <MainDiv>
      {
      comics.map((comic) => {
        return(
          <Card key={comic.id}>
            <img src={comic.thumbnail.path + '/' + sizes.portrait.fantastic + formats.jpg} alt=""/>
            <Infos>
                <ComicName>{comic.title}</ComicName>
                <p>Autores:</p>
                {comic.creators.items.map((creator) => {
                    return <CreatorName>{creator.name}</CreatorName>
                })}
            </Infos>

          </Card>
        )

      })}
      
    </MainDiv>
  )
}