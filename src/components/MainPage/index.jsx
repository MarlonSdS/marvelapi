import Api from '../../util/api'
import {sizes, formats} from '../../util/imageSizes'
import axios from 'axios'
import { useEffect, useState } from 'react'

import {MainDiv, Card, Infos, ComicName, Capa} from './style'
import ComicPage from '../ComicPage'
import Loading from '../Loading'
import CloseButton from '../CloseButton'

export default function MainPage(){
    var [comics, setComics] = useState([])
  var [loading, setLoading] = useState(true)
  var [showPanel, setShowPanel] = useState(false)
  var [comicInfo, setComicInfo] = useState()
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
//se o usuário tiver clicado no título de alguma comic esta codicional exibirá a página específica dessa comic
  if(showPanel){
    return (<>
    <div onClick={() => {
      setShowPanel(false)
    }}>
        <CloseButton />
    </div>
    <ComicPage id={comicInfo.id}/>
    </>)
  }

  return (
    <MainDiv>
      {
      comics.map((comic) => {
        return(
          <Card key={comic.id}>
            <Capa src={comic.thumbnail.path + '/' + sizes.portrait.fantastic + formats.jpg} alt=""/>
            <Infos>
                <ComicName onClick={() => {
                  setComicInfo(comic)
                  setShowPanel(true)
                  console.log(comicInfo.resourceURI)
                }}>{comic.title}</ComicName>

            </Infos>

          </Card>
        )

      })}
      
    </MainDiv>
  )
}