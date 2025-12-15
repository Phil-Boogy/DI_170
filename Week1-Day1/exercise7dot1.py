# Ask the user for a number between 1 and 100
# If the number is a divisible by three, print Fizz
# If the number is a divisible by five, print Buzz.
# If the number is a divisible by both three and five, print FizzBuzz instead.

num = int(input("Give me a number between 1 and 100 "))

#if a >= 1 and a <= 100:
if num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz")

elif num % 5 == 0:
    print("Buzz")

elif num % 3 == 0:
    print("Fizz")
