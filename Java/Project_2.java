/*A basic calculator*/

public class Calculator{
  
    public Calculator(){
      
    }
    
    public int add(int addOne, int addTwo){
      int addThree = addOne + addTwo;
      return addThree;
    }
      
    public int subtract(int subOne, int subTwo){
      int subThree = subOne - subTwo;
      return subThree;
    }
      
    public int multiply(int mulOne, int mulTwo){
      int mulThree = mulOne * mulTwo;
      return mulThree;
    }
      
    public int divide (int divOne, int divTwo){
      int divThree = divOne / divTwo;
      return divThree;
    }
      
    public int modulo (int modOne, int modTwo){
      int modThree = modOne % modTwo;
      return modThree;
    }
      
    
    
    public static void main(String[] args){
      Calculator myCalculator = new Calculator();
      System.out.print(myCalculator.add(5,7));
      System.out.print(myCalculator.subtract(45,11));
      System.out.print(myCalculator.divide(20,5));
      System.out.print(myCalculator.modulo(10,2));
      System.out.print(myCalculator.multiply(2,6));
      
    }
    
    }