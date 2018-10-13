from microbit import *
correctanswer = True
def answer():
    useranswer = ()
    if button_a.was_pressed():
        useranswer = True
    elif button_b.was_pressed():
        useranswer = False

    if useranswer == correctanswer:
        display.scroll("Correct")
    else:
        display.scroll("Incorrect")
print(answer())
