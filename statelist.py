# Write a program that stores a list of states. The program will:

'''Show the list of states to the user
Ask the user to enter a number between 0 and 7.
Use the number provided by the user to find and display the state at that index in the list.
Handle invalid input (e.g., numbers outside the range 0-7 or non-numeric input) gracefully by providing appropriate feedback

Use a list (Python) to store exactly eight states of your choice.
Allow the user to see the complete list of states before choosing.
Implement user input functionality to prompt for a number.
Access the correct state from the array/list based on the user's input.
Print the name of the state to the user.
If the user enters an invalid number (e.g., -1 or 10), display an error message and allow the user to try again.
Comment your code to explain its functionality.'''

############################################

#List of 8 states
states = [
    "Massachusetts",
    "Montana",
    "California",
    "Minnesota",
    "Vermont",
    "Rhode Island",
    "Washington",
    "Maine",
    ]

#Prints the full list of states to the user
for x in states:
    print(x)
print("-----------------------")

#Prompts user for a number + error handling + prompting again if error throws
while True:
    try:
        user_input = int(input("Input a number 0-7 to pick a state at random: "))
        if user_input in range(0,8): #Checks if user input is in range
            print(f"You entered: #{user_input} and the state in that position is: {states[user_input]}") #I saw on Stackoverflow someone use list indexing the user input and I wanted to see if it would work in formatting for the print message. Here's the link: https://stackoverflow.com/questions/42568565/how-to-index-a-list-based-on-user-input-and-print-the-result#42568806
        else:
            print("---------ERROR---------")
            print("Number outside of range. Please enter a number 0-7.") #Error message for inputs outside the range
            print("-----------------------")
    except ValueError:
        print("---------ERROR---------") #Error message for non-numeric inputs
        print("Input must be a number.")
        print("-----------------------")

#I learned try and except in my Python class just a couple weeks ago.


