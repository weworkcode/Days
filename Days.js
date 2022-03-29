import java.util.Scanner;

public class Days {
    public static void main(String[] args){
        String[] days = new String[7];
            days[0] = ("Sunday");
            days[1] = ("Monday");
            days[2] = ("Tuesday");
            days[3] = ("Wednesday");
            days[4] = ("Thursday");
            days[5] = ("Friday");
            days[6] = ("Saturday");
            
            Scanner input = new Scanner(System.in);
                System.out.println("Input 0 to 6 to spit out the day you choose!");
            int num = input.nextInt();
            System.out.println(days[num]);
    }
}
