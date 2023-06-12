let index=0;
bahzad();
function  bahzad()
{let i;
    a=document.getElementsByClassName("a");
  for( i=0;i<a.length;i++)
  {
    a[i].style.display="none";
   }
index++;
   if (index>a.length){index=1;}
a[index-1].style.display="block";
setTimeout(bahzad,3000);
}