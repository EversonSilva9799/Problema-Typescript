"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medico = /** @class */ (function () {
    function Medico(nome, CRM, espec) {
        this.nome = nome;
        this.CRM = CRM;
        this.especialidade = espec;
    }
    Medico.prototype.getNome = function () {
        return this.nome;
    };
    Medico.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Medico.prototype.getCRM = function () {
        return this.CRM;
    };
    Medico.prototype.setCRM = function (CRM) {
        this.CRM = CRM;
    };
    Medico.prototype.getEspecialidade = function () {
        return this.especialidade;
    };
    Medico.prototype.setEspecialidade = function (espec) {
        this.especialidade = espec;
    };
    return Medico;
}());
exports.Medico = Medico;
