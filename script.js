jQuery(document).ready(function(){
  //首页找到现在的时间进行加载
   

   var myDate = new Date();
   /*myDate.setYear(2016);
   myDate.setMonth(2);
   myDate.setDate(2);*/
   


   var time=myDate.toLocaleDateString();

   //$("h1").text('今天是'+time)
   var currentdate=myDate.getDate();
   var currentyear= time[0]+time[1]+time[2]+time[3]
   //var currentmonth1= time[5]//用于显示
   var currentmonth2=myDate.getMonth();//用于计算
   var currentmonth=currentmonth2+1;//用于显示
  //设置表头 
   jQuery("#head >#year").text(currentyear)
   jQuery("#head >#month").text(currentmonth)
//getfirstday方法能输入一个年份和月份返回一号的星期数
  var d=new Date();
  var datestring;
  var currentmonth1stday;
  var getfirstday=function(year,month){
    d.setYear(year);
    d.setMonth(month);
    d.setDate(1);
    currentmonth1stday=d.getDay();
    datestring=d.toLocaleDateString()
    return currentmonth1stday
  }
   //这个变量currentfirstday得到了星期数
   var currentfirstday=getfirstday(currentyear,currentmonth2);

   //$('h2').text(currentmonth1stday);
   //周一是一 但是行元素的起始为0 position得到了table里第一行的位置。
   //这几行代码用于设置第一行1的位置
   var position=currentfirstday-1;  
   if(currentfirstday==0)
    {
      $("td:eq(6)").text(1);}
  else{
   $("td:eq("+position+")").text(1);}


  //下面几行代码用于循环设置1之后和1之前的日期
  // 如果是周日的话 是特殊情况 要在之前六个位置设置天数(这个还需要修改)
   

   if(currentfirstday==0){
    var m ;
    var x=0;
    var y=1;
    var dayscount= function(num){
    d=new Date();
    d.setDate(num);
    return m=d.toLocaleDateString();
  }

    for(var i=5;i>-1;i=i-1){ 
    /*d=new Date();
    d.setDate(x);
    x=d.getDate();
    x--;*/

    m=dayscount(x);
    $("td:eq("+i+")").text(m);
    }

    for(var i=6;i<42;i=i+1){
    /*d=new Date(); 
    d.setDate(y);
    y=d.getDate();
    y++;
    m=d.toLocaleDateString();*/
    m=dayscount(y);
    $("td:eq("+i+")").text(m);
    }
    // 不是周日的话 就获得position并且对1号之前和之后的位置进行循环赋值
  }else{
    var x=0;
    var y=1;
    var m;

    var dayscount= function(num){
    d=new Date();
    d.setDate(num);
    return m=d.toLocaleDateString();
  }


    for(var i=position;i>-1;i=i-1){ 
    /*d=new Date();
    d.setDate(x);
    x=d.getDate();
    x--;*/
    m=dayscount(x);
    x--;
    $("td:eq("+i+")").text(m);
    }



    for(var i=position;i<42;i=i+1){
    /*d=new Date(); 
    d.setDate(y);
    y=d.getDate();
    y++;
    m=d.toLocaleDateString();*/
    m=dayscount(y);
    y++;

    $("td:eq("+i+")").text(m);
    }

  };

//遍历所有td元素 
$('td').each(function(){
 //var $year=jQuery("#head >#year").text();
 //var $month=jQuery("#head >#month").text();

 var $a=$(this).text()
 var array=[];
 array=$a.split("/"); 

  if(currentmonth==array[1]&&array[0]==currentyear)
    {$(this).text(array[2])
      if(array[2]==currentdate){$(this).css('color','red')
                                $(this).css('background-color','rgb(255,130,150)')}}
  else
  {$(this).text(array[2]);
  $(this).css('color','#C0C0C0')}

});



/*var returnlastmonth=function(){
  var d=new Date();
  var u=d.getDate();
  d.setDate(u-42);
  return d.getDate()

}*/

$("button:eq(0)").click(function(){
 /*var now=myDate.getMonth();
 var lastmonth=now-1;
 myDate.setMonth(lastmonth);*/
 //location.reload();
 for(i=0;i<42;i++){
 m=returnlastmonth();
 $("td:eq("+i+")").text(m);
 }

});
    

});