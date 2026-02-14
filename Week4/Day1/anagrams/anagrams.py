from Anagram_checker import AnagramChecker

def menu ():
    user_choice = input ("Press '1' to enter a word and find its anagrams\npress '2' to exit. ")
    while user_choice not in ['1', '2']:
        user_choice = input ("Press '1' to enter a word and find its anagrams\npress '2' to exit. ")
    return user_choice
    
def get_word ():
    user_word = input("Enter a word to find its anagrams:  ").strip()
    while not user_word.isalpha():
            print("You can only use letters and you can only enter one word at a time.")
            user_word = input("enter a word and find its anagrams").strip()
    return user_word   

def main ():
    checker = AnagramChecker ()
    while True:      
        choice = menu()
        if choice == '1':
            user_word = get_word()
            clean_word = user_word.upper()
            if checker.is_valid_word (clean_word):
                anagrams = checker.get_anagrams(clean_word)     
                print(f"YOUR WORD: '{clean_word}' is a valid English word. Anagrams for your word are: {", ".join(anagrams)}")
            else:
                print ("Sorry, that's not a valid word")               
        else:
            print ("bye bye")
            break
main()
