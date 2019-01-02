export class Paciente{
    private cpf  : string;
    private nome : string;
    private nascimento : string;
    private setemplano : boolean;
    private plano : string;

    constructor (cpf:string, nome : string, nasc:string, setemplano:boolean, plano:string){
        this.cpf = cpf;
        this.nome = nome;
        this.nascimento = nasc;
        this.setemplano = setemplano;
        this.plano = plano;

    }

    public getcpf(){
        return this.cpf;
    }
    public setcpf(cpf:string):void{
        this.cpf = cpf;
    }

    public getNome(){
        return this.nome;
    }
    public setNome(nome:string):void{
        this.nome = nome;
    }
    public getsetem(){
        return this.setemplano;
    }
    public setsetem(setem:boolean):void{
        this.setemplano = setem;
    }
    public getplano(){
        return this.plano;
    }
    public setplano(plano:string):void{
        this.plano = plano;
    }
    public getNasc(){
        return this.nascimento;
    }
    public setNasc(nasc:string):void{
        this.nascimento = nasc;
    }
}