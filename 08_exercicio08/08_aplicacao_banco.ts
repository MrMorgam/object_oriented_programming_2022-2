import { Conta, Poupanca, Banco } from "./07_validacao_inserir_numero_de_conta";
import { AplicacaoError } from "./01_classe_excecoes";
import prompt from "prompt-sync";
var input = prompt();
    
function main() {    
    let b: Banco = new Banco();
    let opcao: string = "";
    const menu: string = "########## APLICAÇÃO BANCO ###########\n" +
                        "Opções:\n" +
                        "1 - Cadastrar conta\n" +
                        "2 - Excluir conta\n" +
                        "\n0 - Sair"
    
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
        } catch (e: any) {
            if (e instanceof AplicacaoError) {
                console.log(e.message);
            }
        
            //... outros ifs ou elses
            if (e instanceof Error) {
                console.log("Erro no sistema. Contate o administrador.");
            }
        } finally {
            console.log("Operação finalizada. Digite 0 para sair");
        }
    } while (opcao != "0");

    console.log("Aplicação encerrada");
}


main();