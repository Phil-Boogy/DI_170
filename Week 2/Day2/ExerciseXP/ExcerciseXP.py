# ---Exercise 1
def display_message():
    print("I am learning about functions in Python.") 
    
display_message()

# ---Exercise 2
def favorite_book (title):
    print(f'One of my favorite books is {title}')

favorite_book('Wolf Hall')

# ---Exercise 3
def describe_city(city, country= 'unknown'):
    print(f"{city} is in {country}")

describe_city ('Reykjavik', 'Iceland')
describe_city ('Paris')

# ---Exercise 4
import random
def number_matcher(num):
    # if 1<= num <=100:
    #     print(f"{num} is between 1 and 100")
    # else:
    #     print (f"{num} needs to be between 1 and 100")
    if 1<= num <=100:
        ran_number = random.randint(1, 100)
        if int(num) == ran_number:
            print("Success!")

        if int(num) != ran_number:
            print(f"Fail! Your number: {num}, Random number: {ran_number}")
    else:
        print("your number must be between 1 and 100")

number_matcher(101)

# ---Exercise 5
def make_shirt (size='large', text= 'I love python'):
    print(f"This shirt's size is {size} and says {text}")

make_shirt()
make_shirt('medium', )
make_shirt('small', 'I heart TLV')

# ---Exercise 6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magician_names):
#     for n in magician_names:
#         print(n)

# def make_great(magician_names):
#     for n in magician_names:
#         magician_names = list("the great" + n)

# make_great (magician_names)
# show_magicians (magician_names)

# Step 1: Create a List of Magician Names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Step 2: Create a Function to Display Magicians
def show_magicians(magicians):
    """Print the name of each magician in the list."""
    for magician in magicians:
        print(magician)

# Step 3: Create a Function to Modify the List
def make_great(magicians):
    """Add 'the Great' before each magician's name."""
    for i in range(len(magicians)):
        magicians[i] = f"the Great {magicians[i]}"

# Step 4: Call the Functions
print("Original magicians:")
show_magicians(magician_names)

print("\nAfter making them great:")
make_great(magician_names)
show_magicians(magician_names)

# ---Exercise 7
# Inside main(), provide advice based on the temperature:
# Below 0°C: e.g., “Brrr, that’s freezing! Wear some extra layers today.”
# Between 0°C and 16°C: e.g., “Quite chilly! Don’t forget your coat.”
# Between 16°C and 23°C: e.g., “Nice weather.”
# Between 24°C and 32°C: e.g., “A bit warm, stay hydrated.”
# Between 32°C and 40°C: e.g., “It’s really hot! Stay cool.”
import random
def get_random_temp():
   return random.randint(-10, 40)
   # print(f"The temperature right now is {random_temp} degrees Celsius.")
    
def main ():
        random_temp = get_random_temp() 
        if random_temp < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif random_temp<=16:
            print("Quite chilly! Don’t forget your coat.")
        elif random_temp<=23:
            print("Nice weather.")
        elif random_temp<=32:
            print("A bit warm, stay hydrated.")
        else:
            print("It’s really hot! Stay cool.")
       # print(f"The temperature right now is {random_temp} degrees Celsius.")

main()