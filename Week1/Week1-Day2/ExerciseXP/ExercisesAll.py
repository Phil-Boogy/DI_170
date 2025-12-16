# exercise 1
print("Hello world\n" *4)

# exercise 2
print (99**3*8)

# exercise 3
print(5 < 3) #false
print(3 == 3) #true
print(3 == "3") #false
print("3" > 3) #false
print("Hello" == "hello" ) #false

# exercise 4
computer_brand = "apple"
print(f"I have a {computer_brand} computer")

# exercise 5
name = "Philip Josolowitz"
age = 42
ShoeSize = 11
info = f"Hi I'm {name} I'm {age} years old and if you want to buy me a pair of shoes I wear an {11}"
print(info)

# exercise 6
a=8
b=7
if a>b:
    print("hello world")

# exercise 7
num=int(input("Give me a number "))

# if num % 2 == 0:
    # print("this number is even")
# else:
    #  print("this number is odd")
print(num % 2 == 0)

# exercise 8
myName="Philip"
yourName=input("what's your name?")

if myName==yourName:
    print ("Whoa, we have the same name!")
else:
    print ("Wouldn't it be cool if we had the same name?")

# exercise 9
tallEnough=145
riderHeight=int(input("How tall are you? "))

if riderHeight > tallEnough:
    print("You're good to go!")

else:
    print("sorry, you need to be 145cm tall to ride")