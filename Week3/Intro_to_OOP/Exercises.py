class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
cat1 = Cat("The Boy", 10)
cat2 = Cat("Whiskers", 6)
cat3 = Cat("Spots", 4)

# print(cat1.name)
# print(cat2.age)

# Step 2: Create a function to find the oldest cat
# def find_oldest_cat(*cat_instance):
#    cat_ages = []
#    for cat in cat_instance:
#        cat_ages.append (cat.age)
#    cat_ages.sort()
#    print(cat_ages [-1])

# find_oldest_cat (cat1, cat2, cat3)

# def find_oldest_cat(*cat_instance):
#     cat_ages = []
#     for cat in cat_instance:
#         cat_ages.append (cat)
#         # Sorts 'users' list by the 'age' attribute in ascending order
#     sorted_list = sorted(cat_ages, key=lambda cat: cat.age)
#     print(sorted_list[-1].name , sorted_list[-1].age)

def find_oldest_cat(*cat_instance):
    oldest_cat = cat_instance[0]
    for cat in cat_instance:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    print(f" the oldest cat is {oldest_cat.name}, it's {oldest_cat.age} years old")

# # Step 3: Print the oldest cat's details

find_oldest_cat (cat1, cat2, cat3)



class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def Bark (self):
        print(f"{self.name} goes WOOF!")

    def Jump (self):
        jump_height = self.height * 2
        print(f"{self.name} can jump {jump_height} cm high!")

sarahs_dog = Dog ("Rover", 18)
davids_dog = Dog ("Bowser", 33)

sarahs_dog.Bark ()
davids_dog.Bark ()

sarahs_dog.Jump()
davids_dog.Jump()

def biggest_dog (*dogs):
    big = dogs [0]
    for dog in dogs:
        if dog.height > big.height:
            big = dog
    return big

comparison = biggest_dog(sarahs_dog, davids_dog)


print(comparison.name)

class Song:
    def __init__ (self, lyrics):
        self.lyrics = lyrics
    
    def Sing_a_song(self):
        for line in self.lyrics:
            print(line)
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.Sing_a_song()

class Zoo:
    def __init__ (self, zoo_name):
        self.name = zoo_name
        self.zoo_animals = []
    
    def add_animal (self, *new_animal):
        for entry in new_animal:
            if entry in self.zoo_animals:
                print("that animal's already in the zoo")
            else:
                self.zoo_animals.append(entry)
    
    def get_animals (self):
        print(self.zoo_animals)

    def sell_animal (self, *animal_sold):
        all_sold = []
        for entry in animal_sold:
            if entry in self.zoo_animals:
                all_sold.append (entry)
                self.zoo_animals.remove(entry)
            else:
                print("that animal is not available to sell")
        print(f"these animals were sold {all_sold}")

    def sort_animals (self):
        sorted_animals = sorted(self.zoo_animals)
        animals_dict = {}
        for animal in sorted_animals:
            if animal[0] in animals_dict:
                animals_dict[animal[0]].append(animal)
            else:
                animals_dict.update({animal[0] : [animal]})
        
        self.grouped_animals = animals_dict
        return animals_dict
    
    def get_groups (self):
        print(self.sort_animals())

brooklyn_safari = Zoo("Brooklyn Safari")
brooklyn_safari.add_animal("tiger", "lion", "elephant", "giraffe", "zebra", "bear", "monkey", "penguin", "kangaroo", "panda", "leopard", "cheetah", "hippo", "rhino", "gorilla", "flamingo", "seal", "otter", "wolf", "camel")

# brooklyn_safari.get_groups()
#print(brooklyn_safari.zoo_animals)
brooklyn_safari.sell_animal("seal")
brooklyn_safari.get_groups()