import java.util.Scanner;

public class maiorNumero {
    public static void main(String[] args) {
        Scanner prompt = new Scanner(System.in);

        System.out.println("Informe o primeiro número: ");
        Integer n1 = prompt.nextInt();

        System.out.println("Informe o segundo número: ");
        Integer n2 = prompt.nextInt();

        if (n1 > n2) {
            System.out.println("O número " + n1 + " é maior que " + n2 + ".");
        } else if (n1 < n2) {
            System.out.println("O número " + n1 + " é menor que " + n2 + ".");
        } else {
            System.out.println("Os números são iguais.");
        }

        prompt.close();
    }
}
