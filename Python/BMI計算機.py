# 定義一個函數要求使用者輸入身高體重 並返回計算出的BMI值及判定

# 重試函數要放前面 不然會undefined
def tryAgain():
    again = input('Do you want to try again? (Y/N)')
    if again == 'Y' or again == 'y':
        bmi_app()

def bmi_app():
    # 要求使用者輸入身高和體重
    height = input('How tall are you?')
    weight = input('How much do you weight?')

    # bmi的計算(身高除體重的平方)(體重的單位是公尺)
    bmi = int(weight) / (int(height)/100)**2
    
    # round函數: 取數字到小數點第n位
    print('Your bmi is {}'.format(round(bmi,2)))

    # 用if/else來取得對應評價
    if bmi < 18.5:
        # 加上反斜線的跳脫符
        print('You\'d better eat more!')
    elif bmi >= 18.5 and bmi <= 24:
        print('Good job!')
    else:
        print('You\'d better loose weight')
    
    # 呼叫重試函數
    tryAgain()


bmi_app()

