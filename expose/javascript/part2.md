12.)
- A. student.name
- B. student["Grad Year"]
- C. student.greeting()
- D. student["Favorite Teacher"].name
- E. student.courseLoad[0]

13.) 
- A. 32 - adding the string "3" and 2 concatenates the string 3 with 2 -> 32
- B. 1 - 3 is a string and subtracting 2 from it converts 3 into an integer -> 1
- C. 3 - adding null to integer 3 just gives 3 since null has a value of 0
- D. 3null - defining 3 as a string means that adding a null also makes 'null' into a string -> concatenation of 3 and null
- E. 4 - true = 1, so 1 + 3 = 4
- F. 0 - false = 0 and null = 0, so 0 + 0 = 0
- G. 3undefined: 3 is a string so undefined is converted into a string. Adding both means the program concatenates 3 and undefined 
- H. NaN - since we are subtracting, 3 is converted into an integer. However undefined has no value, so the program returns NaN

14.) 
- A. true: although 2 is a string, the program converts it to an integer during comparison since 1 is an integer. 2 is greater than 1 so it returns true
- B. false: False because we are comparing strings. The first letter of the second string '1' has a value less than the first letter of the first string '2', so the program returns false.
- C. true: '2' is converted into an integer during comparison because 2 is an integer. 2 is equal to 2.
- D. false: === is a strict equality operator. Since 2 and '2' are of different types(integer and string), the program returns false.
- E. false: true is equal to 1 and 1 does not have the same value as 2
- F. true: Boolean(2) returns true, and so both expressions on either sides are of the same type. Therefore the program returns true. 

15.) === is a strict equality operator, so it checks the equality without type conversion. == will check the equality with type conversion. 

