"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Consulta = /** @class */ (function () {
    function Consulta(medico, paciente, valor, data) {
        this.medico = medico;
        this.paciente = paciente;
        this.valor = valor;
        this.data = data;
    }
    Consulta.prototype.obterTipoConsulta = function (paciente) {
        if (paciente.getsetem() == true) {
            return "Plano de Saúde";
        }
        else {
            return "Particular";
        }
    };
    Consulta.prototype.obterNomePagante = function (paciente) {
        if (paciente.getsetem() == true) {
            return paciente.getplano();
        }
        else {
            return paciente.getNome();
        }
    };
    return Consulta;
}());
exports.Consulta = Consulta;
