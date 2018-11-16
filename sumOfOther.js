function sumOfOther(mas)
{
  let mas1=new Array(mas.length).fill(0);
  for(let i=0;i<mas.length;i++)
    {
      for(let j=0;j<mas.length;j++)
        {
          if(i!=j)
            mas1[j]+=mas[i];
        }
    }
  return mas1;
}