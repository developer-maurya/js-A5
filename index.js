// Q1. Find the Product. 
// Write a program that takes an array as input from the user and find out the product of the elements. 
// Note: You have to complete Find_Prod. No need to take any input. 
// Input Format 
// The input contains a single number N, followed by N numbers as array elements. 
// Output Format 
// Return the required answer. 

let arr = [1, 2, 3, 4, 5];
let product = 1;
for (let num of arr) {
    product *= num;
}
console.log(product);

// Q2. Find the Sum. 
// Write a program which takes an array as input from the user and find out the sum of the array elements. 
// Note: You have to complete Find_Sum. No need to take any input. 
// Input Format 
// The input contains a single number N, followed by N numbers as array elements. 
// Output Format 
// Return the required answer. 
let arr1=[1,2,3,4,5];
let sum=0;
for(let num of arr1){
    sum += num
}
console.log(sum);

// Q3. Count Occurrences 
// You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
// occurrences of K in array A. 
// Note: You have to complete findCount function. No need to take any input. 
// Input Format 
// The first line of the input contains two space-separated integers N and K, denoting the number of elements in the array A 
// and the element whose count needs to be determined, respectively. The second line of the input contains N space-separated 
// integers, denoting the elements of the array A. 
// Output Format 
// Return the count of occurrences of K in array A.
const arr3 = [3, 3, 1, 2];
const K = 3;
const caunt= arr3.filter(num => num === K).length;
console.log(caunt)

// Q4. Even Odd 
// You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), 
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A. 
// Note: You have to complete findEvenOdd function. No need to take any input. 
// Input Format 
// The first line of the input contains an integer N, denoting the number of elements in the array A. The second line of the input 
// contains N space-separated integers, denoting the elements of array A. 
// Output Format 
// Return array B as output. 
let arr4=[1,2,3,4,5,6,7];
let evensum4=0;
let oddsum4=0;
console
for(let i=0; i<arr4.length; i++){
       if(arr4[i]%2===0){
        console.log("even",arr4[i])
        evensum4+=arr4[i];
    }else if(arr4[i]%2!==0){
        console.log("odd",arr4[i])
        oddsum4+=arr4[i];
    }    
}
console.log("even sum",evensum4);
console.log("odd sum",oddsum4);

// Q5. Find whether the number is present or not 
// Write a program which takes an array as input from the user and a number. Check whether the number is present or not. 
// Note: You have to complete Find_Num. No need to take any input. 
// Input Format 
// The first line contains an integer N, denoting the size of the array. The second line contains N space-separated integers, 
// denoting the elements of the array. The third line contains an integer M, denoting the element that needs to be searched. 
// Output Format 
// Return the "YES" (without quotes) else return "NO" (without quotes). 
let arr5=[1,2,3,4,5,6];
let check=prompt("enter any number");
let found = false;
for(let i=0;i<arr5.length; i++){
    if(arr5[i]==check){
        found=true;
        break;  
    }
}console.log(found ? "YES":"NO")


// Q6. Higher Age 
// You are given an array A containing the age of persons in your locality, and your task is to find and return an array 
// containing the age of persons that are over 1818 (18(18 included)). 
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge 
// function. No need to take any input. 
// Input Format 
// The first line of the input contains an integer N, denoting the number of person in your locality. The second line of the input 
// contains N space-separated integers, denoting the age of persons in your locality. 
// Output Format 
// Return the array containing the age of persons that are over 1818 (18(18 included)). 

let arr6 =[6, 11, 23, 3, 45, 72, 68, ];
let newarr=[];
for(let i=0; i<arr6.length; i++ ){
    if(18<=arr6[i]){
        newarr.push(arr6[i])
    }
}
console.log(newarr.join(", "))

// Q7. Increment the Array Elements 
// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array. 
// You have to complete Inc_Arr. No need to take any input. 
// Input Format 
// The input contains a single number N, then N array elements as input. 
// Output Format 
// Print the required answer in the function itself. 

let arr7=[1,2,3,4,5];
for(let i=0; i<arr7.length; i++){
    arr7[i] +=1
}
console.log(arr7.join(","))

// Q8. Pass or Fail 
// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
// students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232. 
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes). 
// Note: You have to complete isAllPass function. No need to take any input. 
// Input Format 
// The first line of the input contains an integer N, denoting the number of students in your class. The second line of the input 
// contains N space-separated integers, denoting the maths marks of students in your class. 
// Output Format 
// Return "YES" (without quotes) if all the students pass in your class; otherwise, print "NO" (without quotes).
let arr8=[13, 89, 45, 98, 67, 45, 54]

for(let i=0; i<arr8.length;i++){
    if(arr8[i]>=32){
        console.log(arr8[i],"fass")
    }else{
        console.log(arr8[i],"fail")
    }
}

// Q9. Unique Color Shirt 
// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to 
// wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt 
// of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy 
// wants you to find M. 
// Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N. 
// Input Format 
// The first line of the input contains an integer N denoting the number of shirts in the wardrobe. The second line of the input 
// contains N integers C1,C2,C3,C4,...,CN1,2,3,4,..., color of shirts (separated by space). 
// Output Format 
// Return a single integer M denoting the unique colored shirts left in the wardrobe.  

let arr9 = [3, 2, 4, 1, 2, 3];
let count = {};

for (let i = 0; i < arr9.length; i++) {
    count[arr9[i]] = (count[arr9[i]] || 0) + 1;
}
let color = Object.keys(count).filter(color => count[color] === 1);

console.log(color.length);

            // second method

function findUnqiueColor(N,colors){
    const colorSet = new Set(colors);
    return colorSet.values();
}
let N= 6;
const colors =[3,2,4,1,2,3]
console.log(findUnqiueColor(N,colors))


// Q10. Min and Max 
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to 
// iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the 
// minimum and maximum numbers among those elements. 
// Input format 
// First-line contains N representing the length of the array. The second line contains N space-separated integers. 
// Output format 
// Return minimum and maximum elements. 

let str1 = [66,33, 11, 44, 66, 22, 77 ];
let largest = str1[0]; 
let smallest =str1[0];
for (let i = 1; i < str1.length; i++) {
    if (str1[i] > largest) {
        largest = str1[i];
         
    }else if(str1[i] < smallest ){
        smallest = str1[i];
       
    }
}console.log(largest)
 console.log(smallest)

// second method

let arr10=[66, 33, 11, 44, 66, 22, 77];

let min = Math.min(...arr10);
let max = Math.max(...arr10);

console.log(min, max);
