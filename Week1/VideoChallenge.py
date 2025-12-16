username = input("Username: ")
password = input("Password ")
pwLength = len(password)
pwPrint = '*' * pwLength
print(f"{username}  , your password {pwPrint} is {pwLength} characters long")