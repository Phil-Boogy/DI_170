class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
bengal_cat = Bengal("Tiger", 5)
chart_cat = Chartreux("ChiChi", 2)
we_are = Siamese("Kingston", 12)

all_cats = [bengal_cat, chart_cat, we_are]

sara_pets = Pets(all_cats)

sara_pets.walk()


#____Exercise 2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} says woof, woof!"

    def run_speed(self):
        return self.weight/self.age * 10

    def fight(self, other_dog):
        if self.run_speed () * self.weight > other_dog.run_speed ()* other_dog.weight:
            return f"{self.name} wins the fight"
        
        if self.run_speed () * self.weight == other_dog.run_speed ()* other_dog.weight:
            return f"No one wins the fight"
      
        else:
            return f"{other_dog.name} wins the fight"

# # Step 2: Create dog instances

george = Dog("George", 4, 20)
bernie = Dog("Bernie", 8, 30)
chichi = Dog("ChiChi", 9, 2)

# Step 3: Test dog methods
print(george.bark())
print(bernie.run_speed())
print(george.fight(chichi))

#____Exercise 4
# Step 1: Create the Person Class
# Define a Person class with the following attributes:
# first_name
# age
# last_name (string, should be initialized as an empty string)
# Add a method called is_18():
# It should return True if the person is 18 or older, otherwise False.

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18
    
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []
    
    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return 
        print("That person's not in the list")

    def family_presentation(self):
        print(self.last_name)
        for person in self.members:
            print(person.first_name, person.age)
                
        
josolowitz = Family("Josolowitz")
josolowitz.born("Lavi", 7)
josolowitz.born("Nuri", 6)
josolowitz.born("Danielle", 40)
josolowitz.born("Philip", 42)
josolowitz.check_majority("Lavi")
josolowitz.check_majority("Nuri")
josolowitz.check_majority("Danielle")
josolowitz.check_majority("Philip")
josolowitz.family_presentation()
