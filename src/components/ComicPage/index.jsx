import axios from "axios";
import { useEffect, useState } from "react";
import Api, { baseUrl, keyUrl } from "../../util/api";
import { formats, sizes } from "../../util/imageSizes";
import Loading from "../Loading";
import { Capa, Infos, Panel, Sinopse, Title, CreatorName, Autores, Buybutton } from "./style";

export default function ComicPage(props){
    var [comic, setComic] = useState()
    var [loading, setLoading] = useState(true)
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
                <Buybutton>Comprar</Buybutton>
            </Infos>
        </Panel>
    )
}