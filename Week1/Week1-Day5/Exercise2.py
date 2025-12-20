# _______Exercise 2
#Delete set of keys from Python Dictionary
# keys_to_remove = ["name", "salary"]
# Expected output:
# {'city': 'New york', 'age': 25}

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}

# del sample_dict["name"]
# del sample_dict["salary"]
# print(sample_dict)

keys_to_remove = ["name", "salary"]
for key in keys_to_remove:
    del sample_dict[key]

print (sample_dict)