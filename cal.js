function fun()
{
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var oper=document.getElementById("op").value; 
    
    if(oper=="+")
    {
        document.getElementById("ans").innerHTML=num1+num2;
    }
    if(oper=="-")
    {
        fin=(num1-num2);
        document.getElementById("ans").innerHTML=fin;
    }
    if(oper=="*")
    {
        fin=(num1*num2);
        document.getElementById("ans").innerHTML=fin;
    }
    if(oper=="/")
    {
        fin=(num1/num2);
        document.getElementById("ans").innerHTML=fin;
    }
    if(oper=="%")
    {
        fin=(num1%num2);
        document.getElementById("ans").innerHTML=fin;
    }
    if(oper=="1")
    {
        fin=Math.sqrt(num1);
        document.getElementById("ans").innerHTML=fin;
    }
    
    
}