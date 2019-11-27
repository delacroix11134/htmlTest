# python裡的物件是指class

class Dog:
    # 物件的方法要加上一個self的引數
    def say(self):
        print('Woof!')

# 實例化的寫法
pug = Dog()     
# 調用實例方法用.
pug.say()       # Woof!


# __init__函數
# 用來綁定class中的變數的函數
class Person:
    def __init__(self,name):
        self.name = name
    def greet(self):
        print('Hi! my name is ' + self.name)
    # __str__函數：用來返回當class被要求print時 返回的訊息
    def __str__(self):
        return 'Person: ' + self.name

victor = Person('Victor')
victor.greet()          # Hi! my name is Victor 
print(victor)           # Person: Victor

