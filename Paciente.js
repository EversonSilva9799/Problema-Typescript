"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente = /** @class */ (function () {
    function Paciente(cpf, nome, nasc, setemplano, plano) {
        this.cpf = cpf;
        this.nome = nome;
        this.nascimento = nasc;
        this.setemplano = setemplano;
        this.plano = plano;
    }
    Paciente.prototype.getcpf = function () {
        return this.cpf;
    };
    Paciente.prototype.setcpf = function (cpf) {
        this.cpf = cpf;
    };
    Paciente.prototype.getNome = function () {
        return this.nome;
    };
    Paciente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Paciente.prototype.getsetem = function () {
        return this.setemplano;
    };
    Paciente.prototype.setsetem = function (setem) {
        this.setemplano = setem;
    };
    Paciente.prototype.getplano = function () {
        return this.plano;
    };
    Paciente.prototype.setplano = function (plano) {
        this.plano = plano;
    };
    Paciente.prototype.getNasc = function () {
        return this.nascimento;
    };
    Paciente.prototype.setNasc = function (nasc) {
        this.nascimento = nasc;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
