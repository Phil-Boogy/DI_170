import random

class Game:
    def __init__ (self):
        pass

    def get_user_item(self):
        choices = {"r": "rock", "p": "paper", "s": "scissors"}
        get_input = input("Select (r)ock, (p)aper, or (s)cissors:  ").lower()
        while get_input not in ["r", "p", "s"]:
            print("Get outta here with that invalid character! You wanna play, right?!?!")
            get_input = input("Select (r)ock, (p)aper, or (s)cissors:  ").lower()
        return choices[get_input]
    
    def get_computer_item(self):
       choices = ("rock", "paper", "scissors")
       return random.choice(choices)
    
    def get_game_result(self, user_item, computer_item):
        moves = (user_item, computer_item)
        all_outcomes = {'win': [('rock', 'scissors'), ('paper', 'rock'), ('scissors', 'paper')],
                        'lose': [('rock', 'paper'), ('paper', 'scissors'), ('scissors', 'rock')]}
        if moves in all_outcomes['win']:
            return 'win'
        elif moves in all_outcomes['lose']:
            return 'lose'
        else:
            return 'draw'
        
    def play(self):
        user_item = self.get_user_item ()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You selected {user_item}. The computer selected {computer_item}. You {result}. ")
        return result