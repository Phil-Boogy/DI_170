# ____EXERCISE 1_____
# Create a set called my_fav_numbers and populate it with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.

# my_fav_numbers = {1, 2, 9, 21, 18, 55}
# addTwo = {42, 43}
# my_fav_numbers.update(addTwo)
# #print(my_fav_numbers)
# my_fav_numbers.remove(55)
# #print(my_fav_numbers)

friend_fav_numbers = {2,4,6,9,10,12,13,116, 21}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# ____EXERCISE 2_____
# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.

my_tuple = (2,4,6,8,10)
add_to_tuple = (12, 14, 16)
new_tuple = (my_tuple + add_to_tuple)
print(new_tuple)

# ____EXERCISE 3_____
# You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana" from the list.
# Remove "Blueberries" from the list.
# Add "Kiwi" to the end of the list.
# Add "Apples" to the beginning of the list.
# Count how many times "Apples" appear in the list.
# Empty the list.
# Print the final state of the list.

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("kiwi")
basket.insert(0, "Apples")
num_apples = basket.count("Apples")
basket.clear()
print(basket)

# ____EXERCISE 4_____
# Recap: What is a float? What’s the difference between a float and an integer?
# Create a list containing the following sequence of mixed types: floats and integers:
# 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?
list_num = 1.5
final_list = []
while list_num <= 5:
    if list_num % 1 != 0:
        final_list.append(list_num)
    else:
        list_num = int(list_num)
        final_list.append(list_num)
    list_num+=.5
print(final_list)

# ____EXERCISE 5_____
# Write a for loop to print all numbers from 1 to 20, inclusive.
for n in range(1,21):
    print(n)
# Write another for loop that prints every number from 1 to 20 where the index is even.
for n in range(2,22, 2):
    print(n)

# ____EXERCISE 6_____
# Use an input to ask the user to enter their name.
# Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long)
# hint: check for the method isdigit()
# if the input is incorrect, keep asking for the correct input until it is correct
# if the input is correct print “thank you” and break the loop

user_name = input("Enter your username: ")
while user_name.isdigit() == True or len(user_name) < 3:
    user_name = input("Enter your username: ")

print("thank you, " + user_name)

# ____EXERCISE 7_____
# Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
# Store these fruits in a list.
# Ask the user to input the name of any fruit.
# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!"

fav_fruits=input("List your favorite fruits")
fav_fruits = fav_fruits.split()

is_fav=input("Give me the name of any fruit")

if is_fav in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")

else:
    print("You chose a new fruit. I hope you enjoy it!")


# ____EXERCISE 8_____
# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.

topping = input("What would you like on your pizza?\n Add a topping and hit enter, when you're done type 'quit' ")
topping_list = [topping]
while topping != "quit":
   topping = input("Add another topping, or type 'quit' when done")
   if topping == "quit":
        break
   else:
        topping_list.append(topping)

base_price = 10
each_topping = 2.50
pizza_price = base_price + each_topping*len(topping_list)

print(f"You ordered a pizza with {topping_list}. All together it costs ${pizza_price}")

# ____EXERCISE 9_____
# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.

age = input("How old is everyone in your family? ")
movie_list = age.split()
final_price = 0
babyPrice = 0
kidPrice = 10
adultPrice = 15

# something else I tried that didn't work out, maybe could've if I put mroe time into it.
# while age != "done":
#     age = int(input("How old is the moviegoer? When you're done type done "))
#     if age == "done":
#         break
#     else: 
#         movie_list.append(age)

int_list = [int(i) for i in movie_list]
for ticket_holder in int_list:
    if 3 <=  ticket_holder < 12:
        final_price +=kidPrice
    elif ticket_holder > 12:
        final_price += adultPrice
    else:
        final_price += babyPrice

print(final_price)
        



