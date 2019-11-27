# format 格式化函數
year = 2019
print('This year is ' + str(year))          # This year is 2019

# 用一個大括號把format的內容放進去 format會把year型轉成字串
print('This year is {}'.format(year))       # This year is 2019

# 可以使用多個引數
print('This year is {},and next year is {}'.format(year,year+1))    # This year is 2019,and next year is 2020

# 或是用變數代替
print('This year is {y},and i like {y}'.format(y = year))     # This year is 2019,and next year is 2020



# input 輸入函數
# 在執行時會跳出對話框請你輸入資料 注意:這裡接收到的值是字串
input('How tall are you?')

# 用變數把輸入的資料保存下來
height = input('How tall are you?')

# 用input接收到的值是字串 需先轉成數字才能做運算
print('You are {} meter tall.'.format(int(height)/100))     # You are 1.8 meter tall.

