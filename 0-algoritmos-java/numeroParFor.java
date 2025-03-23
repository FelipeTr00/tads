import java.util.Scanner;

    public class numeroParFor {
        public static void main(String[] args) {
            Scanner prompt = new Scanner(System.in);

            for (;;) { // Loop infinito
                System.out.println("Informe um valor inteiro:");
                Integer numeroInteiro = prompt.nextInt();

                if (numeroInteiro % 2 == 0) {
                    System.out.println("O número " + numeroInteiro + " é par.");
                } else {
                    System.out.println("O número " + numeroInteiro + " é ímpar.");
                }

                System.out.println("Deseja continuar? (s/n):");
                String continuar = prompt.next();

                if (!continuar.equalsIgnoreCase("s")) {
                    break; // Sai do loop se a resposta não for "s"
                }
            }

            System.out.println("Programa encerrado.");
            prompt.close();
        }
    }
