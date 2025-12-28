spaces = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
def whose_turn (turn):
    players = ["X", "O"]
    if turn % 2 == 0:
        return players [0]
    else:
        return players [1]
    
# Funtion that takes players move only
def player_move(player):
    row_move = int(input (f"Player {player}, tell me which row number you want: "))
    column_move = int(input (f"Player {player}, tell me which column number you want: "))
    return row_move, column_move

# function that validates players move only
def move_validator(player):
    row, col = player_move (player)
    if spaces [row-1] [col-1] != " ":
        print("That space is taken!")
        row, col = player_move (player)
    else:    
        spaces [row-1] [col-1] = player

def board ():
    print("**************")
    print(f"{spaces[0][0]} | {spaces[0][1]} | {spaces[0][2]}")
    print("--------------")
    print(f"{spaces[1][0]} | {spaces[1][1]} | {spaces[1][2]}")
    print("--------------")
    print(f"{spaces[2][0]} | {spaces[2][1]} | {spaces[2][2]}")
    print("**************")

def is_winner (player):
        #check rows
    if (spaces[0][0] == spaces[0][1] == spaces[0][2] == player or
        spaces[1][0] == spaces[1][1] == spaces[1][2] == player or
        spaces[2][0] == spaces[2][1] == spaces[2][2] == player or
       # check columns
        spaces[0][0] == spaces[1][0] == spaces[2][0] == player or
        spaces[0][1] == spaces[1][1] == spaces[2][1] == player or
        spaces[0][2] == spaces[1][2] == spaces[2][2] == player or
        # check diagonal
        spaces[0][0] == spaces[1][1] == spaces[2][2] == player or
        spaces[0][2] == spaces[1][1] == spaces[2][0] == player):
        print (f"Player {player} wins!")
        return True 
    # check if tied
    if " " not in spaces [0] and " " not in spaces [1] and " " not in spaces [2]:
        print ("tie game") 
        return True
    return False
         
def game_play ():
    turn = 0
    game_on = True

    while game_on:
        board ()
        player = whose_turn (turn)
        move_validator(player)
        if is_winner(player):
            game_on = False
        turn+=1

game_play ()