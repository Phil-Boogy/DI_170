class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __repr__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return int(self.amount)
    
    def __iadd__ (self, other):
        if isinstance(other, (int, float)):
            self.amount += other
        elif self.currency == other.currency:
            self.amount += other.amount
        elif self.currency != other.currency:
            raise TypeError (f"Cannot add between Currency type {self.currency} and {other.currency}")
        return self
    
    def __add__(self, other):
        if isinstance(other, (int, float)):
            return self.amount + other
        elif self.currency == other.currency:
            return self.amount + other.amount
        else:
            raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
        
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

#the comment is the expected output
print(c1)
# '5 dollars'

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(c1 + 5)
# 10

print(c1 + c2)
# 15

print(c1) 
# 5 dollars

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>
#comment the print above before you run the file for next exercises (since the error will crash your file)
    
        
       


