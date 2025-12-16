# Write code that will ask the user for their height in centimeters.
# If they are over 145 cm, print a message that states they are tall enough to ride.
# If they are not tall enough, print a message that says they need to grow some more to ride.

tallEnough=145
riderHeight=int(input("How tall are you? "))

if riderHeight > tallEnough:
    print("You're good to go!")

else:
    print("sorry, you need to be 145cm tall to ride")