# **Part 1** #

1. 20
2. 20
3. 20
4. ReferenceError: Result is not defined. At line 8, console is trying to use a 'let' variable from outside the scope that it was defined in which was inside the function. Line 8 is outside of the function, so the program produces an error that says the variable result is not defined.
5. Returns a TypeError: Assignment to constant variable. Because result is being defined as a constant variable and is set to 0 in line 5, trying to change its value in line 7 to num1 + num2 will produce an error because we cannot reassign values to result since it is constant. 
6. Produces the same error because we are trying to use the result variable but the error comes from trying to change the result variable after it has been assigned the value 0. 

# **Part 2** #

1. It prints the value 3 to the console. Since line 12 is only printing out the value of i and the loop only continues up strictly until i is less than 3(which is the length of the variable price), i will have the value of 2 at the last iteration of the loop. However, it updates to 3 with i++, so the console prints out 3 at line 12. 
2. It prints 150 to the console. The variable discountedPrice has a value of 50 in the first iteration of the loop with i = 0 (prices[0] + (1-0.5) = 100*(0.5) = 50), then discountedPrice has a value of 100 in the second iteration of the loop with i = 1(prices[1] + (1-0.5) = 200*(0.5) = 100), and finally discountedPrice = 150 in the final iteration of the loop with i = 2(prices[2] + (1-0.5) = 300*(0.5) = 150). So the value printed to the consle will be 150.
3. It prints 150 to the console. finalPrice is 50 in the first iteration(Math.round((50*(100))/100) = 50), 100 in the second iteration(Math.round((100*(100))/100) = 100), and 150 in the third iteration(Math.round((150*(100))/100) = 150). So the final result will be 150.
4. Nothing is printed to the console, but the code will return the variable discounted = [50,100,150].
5. It produces a ReferenceError: i is not defined because i is defined as a let variable inside the scope of the for loop, and line 11 is trying to print the variable i to the console outside of its defined scope.
6. It produces a ReferenceError: discountedPrice is not defined because like i, discountedPrice is defined as a let variable which can only be used inside the scope of the for loop. Since line 13 is trying to access discountedPrice outside of its defined scope, the program will return an error.
7. It prints the value 150 to the console because finalPrice is not defined as a let variable and therefore by default has a function scope, so it can be accessed from anywhere inside the function.
8. Nothing is printed to the console, but the code will return the variable discounted = [50,100,150].
9. Returns a ReferenceError: i is not defined. i is defined as a let variable so it can only be accessed inside the for loop block, but line 11 tries to access it outside of the block so the program returns an error.
10. It prints 3 to the console. Even though the variable length is defined as constant and is assigned the value 3(length of the price array), no lines of code tries to change its value. Therefore, no errors occur and the program prints out 3.
11. Nothing is printed to the console, but the code will return the variable discounted = [50,100,150]. Line 7 creates a new constant variable discountedPrice for every iteration. 
