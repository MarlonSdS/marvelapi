import axios from "axios";
import { useEffect, useState } from "react";
import Api, { baseUrl, keyUrl } from "../../util/api";
import { formats, sizes } from "../../util/imageSizes";
import Loading from "../Loading";
import LocationPage from "../LocationPage";
import CloseButton from "../CloseButton";
import { Capa, Infos, Panel, Sinopse, Title, CreatorName, Autores, Buybutton } from "./style";

export default function ComicPage(props){
    var [comic, setComic] = useState()
    var [loading, setLoading] = useState(true)
    var [getLocate, setGetLocate] = useState(false)
    var [showPanel, setShowPanel] = useState(false)
    useEffect(()=>{
        axios.get(baseUrl+'/'+props.id+keyUrl).then(res => {
            console.log(res)
            setComic(res.data.data.results[0])
            setLoading(false)
        })
    }, [])

    if(loading){
        return <Loading/>
    }
    //se o usuário tiver clicado em comprar esta condional exibirá a página de seleção de endereço
    if(getLocate){
        return (<>
        <div onClick={() => {
          setShowPanel(false)
          setGetLocate(false)
        }}>
            <CloseButton />
        </div>
        <LocationPage />
        </>)
      }

    return(
        <Panel>
            <Capa src={comic.thumbnail.path +'/'+ sizes.portrait.incredible + formats.jpg} alt="" srcset="" />
            <Infos>
                <Title>{comic.title}</Title>
                <Sinopse>{comic.description}</Sinopse>
                <Autores>
                    <p>Autores:</p>
                    {comic.creators.items.map((creator) => {
                        return <CreatorName>{creator.name}</CreatorName>
                    })}
                </Autores>
                <Buybutton onClick={() => {setGetLocate(true)}}>Comprar</Buybutton>
            </Infos>
        </Panel>
    )
}