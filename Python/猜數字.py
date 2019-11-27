import random

def replay():
    retry = input('Another game?(Y/N)')
    if retry == 'Y' or retry == 'y':
        guess()

def guess():
    ans = random.randint(1,100)
    guess = input('Please guess a number(1-100)')
    n = 6

    while n >= 1:
        if int(guess) > ans:
            n-=1
            if n == 0:
                print('The answer is WRONG, game over:(')
                break
            print('The answer is smaller than ' + guess + ', guess remain ' + str(n) + ' times')
            guess = input('Please try again(1-100)')
        elif int(guess) < ans:
            n-=1
            if n == 0:
                print('The answer is WRONG, game over:(')
                break
            print('The answer is bigger than ' + guess + ', guess remain ' + str(n) + ' times') 
            guess = input('Please try again(1-100)')
        else:
            print('Congratulations! the answer is ' + guess)
            break
    
    replay()
    
     
guess()