//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
    [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]

]

//1. district having Highest +ve case =reduce(2 arguments)
highest = covid_data.reduce((cov1, cov2) => cov1[2] > cov2[2] ? cov1 : cov2)
console.log(`1. district having Highest +ve case:  ${highest[1]}`);

//2. district having Highest 1st dose vaccine
hdose = covid_data.reduce((cov1, cov2) => cov1[5] > cov2[5] ? cov1 : cov2)
console.log(`2. district having Highest 1st dose vaccine:  ${hdose[1]}`);

//3. district having lowest death rate
ldeath = covid_data.reduce((cov1, cov2) => cov1[3] < cov2[3] ? cov1 : cov2)
console.log(`3. district having lowest death rate:  ${ldeath[1]}`);

//4. sort data with +ve case in descending order
console.log("4. sort data with +ve case in descending order ---");
sorted = covid_data.sort((cov1, cov2) => (cov2[2] - cov1[2])).forEach(cov => console.log(cov[1]));
// console.log(covid_data);

//5. is there any  district with +ve cases > 15000
check = covid_data.some(cov => cov[2] > 15000)
console.log(`Is there any  district with +ve cases > 15000: ${check ? 'Yes' : 'No'}`);

//6. sort data with 1st dose vaccine
console.log("6. sort data with 1st dose vaccine ---");
covid_data.sort((cov1, cov2) => (cov1[5] - cov2[5])).forEach(cov => console.log(cov[1]));
// console.log(covid_data);


//7. Print Thrissur details = find
console.log("7. Print Thrissur details ---");
cov = covid_data.find(cov => cov[1] === "Thrissur")
console.log(`---district details:----
            name: ${cov[1]}
            no.of covid positive rate: ${cov[2]}
            no.of death rate: ${cov[3]}
            no.of curred cases: ${cov[4]}
            1st dose vaccine count: ${cov[5]}
            2nd dose vaccine count: ${cov[6]}`
            );


//8. Print total number of positive cases = map,reduce
tposi = covid_data.map((cov) => cov[2]).reduce((case1, case2) => case1 + case2)
console.log(`8. Print total number of positive cases:  ${tposi}`);


//9. Print total number of curred cases
tcurred = covid_data.map((cov) => cov[4]).reduce((cur1, cur2) => cur1 + cur2)
console.log(`9. Print total number of curred cases:  ${tcurred}`);


//10. Print curred cases in Idukki = find
iducCurred = covid_data.find(cov => cov[1] == "Idukki")
console.log(`10. Print curred cases in Idukki:  ${iducCurred[4]}`);
