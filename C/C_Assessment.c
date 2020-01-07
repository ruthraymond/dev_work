
// Only change the code in the function definitions below
// don't change the function declarations or main

#include <stdio.h>
#include <string.h>

// Don't change these
void question1(void);
void question2(void);
void question3(void);
void question4(void);
void question5(void);

// Don't change this
int main(void)
{
question1();
question2();
question3();
question4();
question5();
    return 0;
}

// Change these five function definitions

// Create 3 variables
// an integer called value1, and assign it the value 7
// an integer called value2, and assign it the value 2
// a floating point number called result, and assign it
// the value of 7 divided by 2, as a floating point number
// print out the value of result, using printf, to 2
// decimal places (this line is provided)

void question1(void)
{ int value1 = 7;
int value2 = 2;
float result = 7/2; /*or I could do float result = value1/value2;*/
printf("Question 1\n", result);


printf("result is %.2f\n", result);
}

// CHange the value of x so that "oranges" is printed
// to the screen
void question2(void)
{
printf("Question 2\n");

int x = 7;

if (x > 7 || x < 2)
{
printf("apples\n");
}
else if (x <= 7 && x > 6)
{
printf("oranges\n");
}
else
{
printf("pears\n");
}
}

// write a for loop to iterate over the items in my_data
// and print thier values doubled (i.e. my_data * 2) to
// the screen

void question3(void)
{
printf("Question 3\n");
   
int my_data[6] = {11,22,33,44,55,66};
   
for (int i=0;i < 6; i++){
   my_data[i]*=2;
        printf("%d\n", my_data[i]);
    }
       
   
}

struct Delegate
{
char name[30];
int age;
int id_number;
char address[50];
};

void people( struct Delegate print_dels);

// create an instance of the Delegate struct called john
// Initialise john with the following values:
// name = "john"
// age = 52
// id_number = 12345678
// address = "12 park lane, london, uk"
//
// Then print out ALL of johns details

int main(void)
{
question4();


    struct Delegate john = {"john", 52, 12345678,"12 park lane, london, uk"};
   
    people(john);
   
    return 0;
   
}


void question4(void)
{
printf("Question 4\n");
}

void people(struct Delegate print_dels)
{   printf("Name of delegate: %s\n", print_dels.name);
    printf("Age of delegate: %d\n", print_dels.age);
    printf("Delegate ID: %d\n", print_dels.id_number);
    printf("Delegate Address: %s\n", print_dels.address);
}



// Tricky
// Create a function (note no prototype has been provided)
// that takes a value and prints that value sqaured to
// the screen (squared is the values times itself, e.g.
// 10 squared = 10 * 10
// The function should work correctly after the commented
// lines in question5 are uncommented


void print_square(int num);

{ int


// print_square(5);
// print_square(10);
// print_square(14.5);
printf("Question 5\n");
}


void print_square(int num)
{  
    int result = num*num;
     printf("%d squared is %d\n", num, result);

}

