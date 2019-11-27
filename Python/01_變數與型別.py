## Python的變數與型別

# 定義變數
msg = 'Hello'
print(msg)

# python不會自動轉換型別 需用函數把數字轉換成字串
str = '99999'
print(int(str))


## 串列
# 定義串列(陣列)
list1 = [1,2,3,4,5,6]
print( len(list1) )     # 6
print( list1[0] )       # 1    

# 用.append()新增物件到list
list1.append(7)
print(list1)            # [1, 2, 3, 4, 5, 6, 7]

# 用.remove()移除物件
list1.remove(5)
print(list1)            # [1, 2, 3, 4, 6, 7]

# 用.extend()合併list
list1.extend(['cat','dog','pug'])
print(list1)            # [1, 2, 3, 4, 6, 7, 'cat', 'dog', 'pug']


## 字典
# 定義字典(物件)
dict1 = {'name': 'victor', 'pet': 'pug', 'age': '31'}
print(dict1['name'])

# 字典新增鍵值的方法
dict1['height'] = 168 
print(dict1)        # {'name': 'victor', 'pet': 'pug', 'age': '31', 'height': 168}

# 字典刪除鍵值的方法
del dict1['age']
print(dict1)        # {'name': 'victor', 'pet': 'pug', 'height': 168}


## 比較
print(2 > 1)        # True
print(1 == 1)       # True
print(2 == '2')     # False

print(2 > 1 and 3 > 2)  #True
print(2 > 1 or 2 > 3)   #True

# print(1 > 'A')    # TypeError
print('B' > 'A')    # True (比較英文字母的順序)


## 布林值(True/False)
isCool = True
print(isCool and True)      # True
print(True and False)       # False
print(isCool or 1>2)        # True



## 常用函數

# type() 檢視傳入物件的型別
print(type(list1))          # <class 'list'>

# help() 顯示詳細使用資訊
print(help(list1))