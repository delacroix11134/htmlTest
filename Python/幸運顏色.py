# 隨機從串列中選出物件

# random的模組要先import才能用
import random 

# 從串列隨機有兩種方法
colors = ['Red','Blue','Yellow','Green','Purple']

# 用randint(x,y)來隨機在x-y之間的整數
print(colors[random.randint(0,4)])

# 或使用random.choice()
print(random.choice(colors))