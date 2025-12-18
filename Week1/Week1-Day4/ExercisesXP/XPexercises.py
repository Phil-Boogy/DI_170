# ____EXERCISE 1_____
# Create a set called my_fav_numbers and populate it with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.

my_fav_numbers = {1, 2, 9, 21, 18, 55}
addTwo = {42, 43}
my_fav_numbers.update(addTwo)
#print(my_fav_numbers)
my_fav_numbers.remove(55)
#print(my_fav_numbers)

friend_fav_numbers = {2,4,6,9,10,12,13,116, 21}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
