import java.util.Scanner;

public class exemploDeIf2 {
    public static void main(String[] args) {
        Scanner prompt = new Scanner(System.in);

        System.out.println("Informe um valor inteiro:");
        Integer numeroInteiro = prompt.nextInt();

        if(numeroInteiro % 2 == 0) {
            System.out.println("O número " + numeroInteiro +
                    " é par." );
        } else if (numeroInteiro % 2 == 1) {
            System.out.println("O número " + numeroInteiro +
                    " é ímpar.");
        }

    }
}
