let inputFruit = '蘋果';

switch(inputFruit){
	case '蘋果':
	case '香蕉':
	case '芭樂': console.log(inputFruit + '是四季都有的水果');
	break;

	case '西瓜':
	case '芒果':console.log(inputFruit + '是夏季水果');
    break;

    default:console.log('去你的香蕉芭樂');
    break;
}


//Date()會自動把日期時間保存維初始值 getDay()方法會從Date返回一周中的某一天0~6

switch (new Date().getDay()){
	case 1:
	    console.log('猴子穿新衣');
	    break;
	case 2:
	    console.log('猴子去跳舞');
	    break;
	case 3:
	    console.log('猴子去爬山');
	    break;
	case 4:
	    console.log('猴子去考試');
	    break;
	case 5:
	    console.log('猴子去跳舞');
	    break;
	case 6:
	    console.log('猴子去斗六');
	    break;
	case 0:
	    console.log('猴子吃大便');
	    break;
	default:
	    console.log('猴子不知道要幹嘛');
}