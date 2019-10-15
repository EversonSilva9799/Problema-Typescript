import { Medico } from "./Médico";
import { Paciente } from "./Paciente";

export abstract class Consulta{
    private medico  : Medico;
    private paciente: Paciente;
    private valor   : Number;
    private data    : string;

    constructor (medico:Medico, paciente: Paciente, valor : Number, data : string){
        this.medico = medico;
        this.paciente = paciente;
        this.valor = valor;
        this.data = data;

    }
    
    public getMedico() {
        return this.medico;
    }
    
    public setMedico(medico: Medico) {
        this.medico = medico;
    }
    
    public getPaciente() {
        return this.paciente;
    }
    
    public setPaciente(paciente: Paciente) {
        this.paciente = paciente;
    }
    
    public getValor() {
        return this.valor;
    }
    
    public setValor(valor: number) {
        this.valor = valor;
    }
    
    public getData() {
        return this.data;
    }
    
    public setData(data: Date) {
        this.data = data;
    }

    public  obterTipoConsulta(paciente:Paciente):string{
        if (paciente.getsetem() == true){
            return "Plano de Saúde"
        }else{
            return "Particular"
        }
        
    }

    public obterNomePagante(paciente:Paciente):string{
        if (paciente.getsetem()== true){
            return  paciente.getplano();
        }else {
            return paciente.getNome();
        }
       

    }
}
