export class Medico{
    private nome          : string;
    private CRM           : string;
    private especialidade : string;


    constructor (nome:string,CRM: string, espec:string){
        this.nome = nome;
        this.CRM  = CRM;
        this.especialidade = espec;
    }

    public getNome(){
        return this.nome;
    }
    public setNome(nome:string):void{
        this.nome = nome;
    }
    public getCRM(){
        return this.CRM;
    }

    public setCRM(CRM:string){
        this.CRM = CRM;
    }
    public getEspecialidade(){
        return this.especialidade;
    }
    public setEspecialidade(espec:string){
        this.especialidade = espec;
    }
    
}