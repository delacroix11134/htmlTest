## if elif else
if 3>2:
    print('It is true')

if 2>5:
    print('2>5')
elif 2<5:
    print('2<5')
else:
    print('2=5')


# 定義函數
def sayHi():
    print('Hi!')

sayHi()

# 加入引數的函數
def greet(name):
    print('Hello ' + name + '!')

# greet()           # TypeError(需要加入引數否則會報錯)
greet('Victor')     # Hello Victor!


# 定義一個判斷數字大小的函數
def isBiggerThenFive(number):
    if number > 5:
        print(str(number) + ' is bigger then 5')
    elif number < 5:
        print(str(number) + ' is smaller then 5')
    else:
        print(str(number) + ' is 5')

isBiggerThenFive(10)        # 10 is bigger then 5
isBiggerThenFive(2)         # 2 is smaller then 5
isBiggerThenFive(5)         # 5 is 5


# for迴圈
numbers = ['one','two','three','four','five','six']

for num in numbers:
    print(num + ' little Indians')