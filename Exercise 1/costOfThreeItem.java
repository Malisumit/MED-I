import java.util.*;
public class costOfThreeItem{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the price of Pencil : ");
        float pencil = sc.nextInt();
        System.out.println("Enter the price of Pen : ");
        float pen = sc.nextInt();
        System.out.println("Enter the price of Erase : ");
        float eraser = sc.nextInt();
        float total = pencil + pen + eraser;
        float tax=total*(0.18f);
        float totalCost = total + tax;
        System.out.println("The total cost of three items with 18% gst is : "+totalCost);
    }
}