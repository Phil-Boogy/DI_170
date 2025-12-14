# Ask the user for a number between 1 and 100
# If the number is a divisible by three, print Fizz
# If the number is a divisible by five, print Buzz.
# If the number is a divisible by both three and five, print FizzBuzz instead.

a = int(input("Give me a number between 1 and 100 "))

#if a >= 1 and a <= 100:
if a/3:
    print("Fizz")

elif a/5:
    print("Buzz")

elif a/3 and a/5:
    print("FizzBuzz")
