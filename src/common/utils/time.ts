export function tempoParaSegundos(tempo: string){
    const [horas='0',minutos='0',segundos='0'] = tempo.split(":")

    const horasEmSengundos = Number(horas) * 3600;
    const minustosEmSengundos = Number(minutos) * 60;
    return horasEmSengundos + minustosEmSengundos + Number(segundos)
}