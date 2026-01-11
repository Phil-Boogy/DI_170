from game import Game

def get_user_menu_choice():
    menu_choice = input('''
                        Menu:
                        P = Play a new game
                        X = Show scores and exit
                        ''').upper()
    return menu_choice

def print_results(results):
    print(f'''Thanks for playing.
          Game results:
          You won {results['win']} times
          You lost {results['lose']} times
          You drew {results['draw']} times
          
          ''')

def main():
    results = {'win': 0, 'lose': 0, 'draw': 0}
    while True:
        user_menu_choice = get_user_menu_choice()
        if user_menu_choice == 'P':
            new_game = Game()
            game_result = new_game.play()
            results[game_result] += 1
            # new_result = int(results[game_result])
            # new_result += 1
            # results.update[{game_result, new_result}]
        elif user_menu_choice == 'X':
            print_results(results)
            break
        else:
            print("That's not a valid choice")

main ()