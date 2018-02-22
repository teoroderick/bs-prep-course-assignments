/*
Challenge 1:
Write a loop 
that logs the following triangle to the console:

#
##
###
####
#####
######
#######

Diving Deeper: 
Are you using `console.log()` multiple times for each line? 
Can you do it with one call for all 7 lines of hashes?
*/

var base = 7
for (var tri = "#"; tri.length <= base; tri = tri + "#")
  console.log(tri);

/*
Code explanation:
The for statement can be used to create a loop
that logs the triangle to the console.

The logging act is completed by line 16,
where console.log's parameter is the variable 'tri'
which means JavaScript displays the value of tri.

The value of tri is the string '#'
which represents a bit of the triangle used in the challenge.

Through the for statement,
the logging act can be repeatedly done,
and the the value of tri can undergo the same change repeatedly,
which the logging act displays accordingly.

Line 15 is the for statement that houses the looped logging act.
  console.log(tri);
Line 16 is looped as long as the condition
specified on the 2nd parameter of the for statement is true:
  tri.length <= base
The condition is tied to the number variable 'base'
which ultimately determines the size of the triangle is.
The condition determines until when the looped logging act stops.
The condition is this: if the number of characters in tri
is less than or equal to the base, 
proceed logging/displaying tri string.
Line 14, the beginning of the code, declares the variable base
  var base = 7

In the first instance of the loop,
at the start, tri is assigned with '#' and then
at the end, tri is suffixed with another '#'.
The former is specified in the 1st parameter:
  var tri = "#"
and the latter, on the 3rd parameter:
  tri = tri + "#"
With this arrangement,
in the next instance of the loop,
after the first logging act of displaying tri ('#') is done,
tri will have become '##' from '#'
Because the condition is still satisfied,
where tri's number of characters (2)
is still less than or equal to the base (7)
the control is still in the loop, and
the next display shows the value of tri in that loop instance
such that the display, from
  #
will now have this:
  #
  ##
This will be repeated until the condition is no longer met,
thereby completing the triangle through a for statement loop.
*/

/*
Challenge 2:
Write a function that takes in an integer (number) as a parameter. 
The function must log `"the number is even"` 
if the given parameter is an even number, and 
log `"the number is odd"` if it is odd.

Diving Deeper: 
What happens if the given parameter is not a number at all?
function isOddEven(n) {
    console.log(result);
    return result;
}
*/

function isOddEven(n) {
  var result = '';
    if (!Number.isInteger(n))
      result = 'invalid entry is neither odd nor even';
    else
      result = ((n%2) ? 'the number is odd' : 'the number is even');
  console.log(result);
  return result;
  }

//test  
//(isOddEven('john'));
//(isOddEven(104));
//(isOddEven(45));

/*
Explanation:
The result of the function depends on the parameter provided.

Line 94 declares the function and
the parameter as the variable 'n'
which will be the number in question,
whether odd or even.

Line 95 declares the variable 'result' at the scope of the function.
This variable will capture
the results of the checks included in the function.

Line 96 checks if the parameter given is valid.
Dive Deeper had a question that this piece attempts to address,
the question being what happens if parameter was not a number.
The approach taken to determine if a number is odd or even
is by performing some calculations,
specifically what is the remainder when dividing the number by 2,
completed by using the 'modulo' operator,
seen in line 99
  n%2
When JavaScript performs arithmetic operations on a non-number,
the calculation will not complete, and
the result will be 'NaN' or not-a-number.
Furthermore, non-whole numbers (non-integers) are not even or odd.
Therefore, to screen, Line 96 uses the Number.isInteger method on 'n'
  (!Number.isInteger(n))
The ! operator is added to help with the flow of the code
such that if the number is NOT an integer,
the result will be as in Line 97:
  'invalid entry is neither odd nor even'
The program then proceeds to log the result, as in Line 100:
  console.log(result);
Line 101 follows and is the last since it has the return keyword
which ends the function, and 
avoids 'undefined' value for the function:
  return result;

Back to Line 96, should the number (n parameter) be an Integer
(the result of the if false - not a non-Integer)
control goes to the else piece.
Here the result variable gets updated 
based on the calculation mentioned earlier, n%2.
Line 99 assigns the value to result variable
by using the ternary/conditional operator
  condition ? true : false
The condition is n%2, with a true going with odd, and false, even:
  ((n%2) ? 'the number is odd' : 'the number is even');
In JavaScript, when the value of 0 is used as a condition,
it returns false.
Since 0 is the result of n%2 if n is even,
the false operator is assigned with 'the number is even' result.
On the other hand, with n screened as an integer,
any other value when used as a condition evaluates to true.
Therefore, the result of 'the number is odd' corresponds to true.
Once this is step is determined, 
the run concludes with logging the updated result,
and causing the function to return the same result.
*/