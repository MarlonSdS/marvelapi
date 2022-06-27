import {Label, Panel, ConfirmButton, MapContainer} from './style'
import Mapa from "../Mapa"

export default function LocationPage(){

    return(
        <Panel>
            <Label>Por favor selecione um endereço</Label>
            <MapContainer >
                <Mapa />

            </MapContainer>

            <ConfirmButton onClick={() => {
                alert("Comprado com sucesso!\nA comic está a caminho do seu endereço")
                location.reload()
            }
            }>Confirmar</ConfirmButton>
        </Panel>
    )

}