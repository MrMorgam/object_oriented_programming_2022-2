"use strict";
exports.__esModule = true;
var _07_validacao_inserir_numero_de_conta_1 = require("./07_validacao_inserir_numero_de_conta");
var _01_classe_excecoes_1 = require("./01_classe_excecoes");
var prompt_sync_1 = require("prompt-sync");
var input = (0, prompt_sync_1["default"])();
function main() {
    var b = new _07_validacao_inserir_numero_de_conta_1.Banco();
    var opcao = "";
    var menu = "########## APLICAÇÃO BANCO ###########\n" +
        "Opções:\n" +
        "1 - Cadastrar conta\n" +
        "2 - Excluir conta\n" +
        "\n0 - Sair";
    do {
        console.clear();
        console.log(menu);
        try {
            opcao = input("Digite a opção desejada: ");
            switch (opcao) {
                case "1":
                    //opção cadastrar...
                    break;
                case "2":
                    //opção excluir
                    break;
                //demais casos...
            }
        }
        catch (e) {
            if (e instanceof _01_classe_excecoes_1.AplicacaoError) {
                console.log(e.message);
            }
            //... outros ifs ou elses
            if (e instanceof Error) {
                console.log("Erro no sistema. Contate o administrador.");
            }
        }
        finally {
            console.log("Operação finalizada. Digite 0 para sair");
        }
    } while (opcao != "0");
    console.log("Aplicação encerrada");
}
main();
