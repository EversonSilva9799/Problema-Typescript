import { Consulta } from "./Consulta";
import { Medico } from "./Médico";
import { Paciente } from "./Paciente";
export class PlanoSude extends Consulta{

    constructor (medico:Medico, paciente: Paciente, valor : Number, data : string){
        super (medico,paciente,valor,data)
    }

}