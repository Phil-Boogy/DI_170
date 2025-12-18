# Ask the user for two inputs:
# A number (integer).
# A length (integer).
# 2. Create a program that generates a list of multiples of the given number.
# 3. The list should stop when it reaches the length specified by the user.

# mult_table = []
# num = int(input("Give me a number: "))
# num_length = int(input("give me another number: "))+1

# for i in range(num_length):
#     addThis = i*num
#     mult_table.append(addThis)

# print(mult_table)

# Ask the user for a string.
# 2. Write a program that processes the string to remove consecutive duplicate letters.
# The new string should only contain unique consecutive letters.
# For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
# 3. The program should print the modified string.

user_input = input("Give me a word: ")
new_string = user_input [0]
for i in range (1, len(user_input)):
    if user_input[i] != user_input[i-1]:
            new_string += user_input[i]
# if i == len(user_input) and user_input[i] != user_input[i-1]:
#     new_string += user_input[i]

print(new_string)