# def say_hello():
#     """A function that says hello"""
#     print("Hello!") 

# say_hello()

# def say_hello(username):
#     print(f"Hello {username}")

# say_hello("Rick") # "Rick" is an argument
# # output "Hello Rick"

# say_hello("Morty") # "Morty" is an argument
# # output "Hello Morty"

def say_hello(username, language):
    if language == "EN":
        print(f"Hello {username}")
    elif language == "FR":
        print(f"Bonjour {username}")
    else:
        print("This language is not supported: " + language)

say_hello("Rick", "FR")

# keyword arguments, doesn't matter which order the variables are, language comes first when the function is called followed by username and it's all good:
# def say_hello(username, language):
#     if language == "EN":
#         print("Hello "+username)
#     elif language == "FR":
#         print("Bonjour "+username)
#     else:
#         print("This language is not supported: " + language)

# say_hello(language="FR", username="Rick")

# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

# def calculation(a, b):
#     return (a+b, a-b)

# # res = calculation(40, 10)
# # print(res)

# add, minus = calculation(40,10)
# print(add, minus)

# Using map and filter, try to say hello to everyone who's name is less than or equal to 4 letters

people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

filtered_list = filter(lambda name: len(name) <= 4, people)
# mapped_list = map(lambda name: f"hello {name}" , filtered_list)

print(list(filtered_list))