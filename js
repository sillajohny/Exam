echo "Enter number : "
read n
 
r=0

sum=0
 
while [ $n -gt 0 ]
do
    r=$(( $n % 10 ))
    n=$(( $n / 10 ))  
    sum=$(( $sum + $r )) 
done
echo  "Sum of all digit  is $sum"
