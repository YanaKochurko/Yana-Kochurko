let array = [
    { name: "Ivan", salary: 1000 },
    { name: "Anton", salary: 2000 },
    { name: "Yana", salary: 7000 },
    { name: "Gena", salary: 15000 },
    { name: "Sasha", salary: 300 },
    { name: "Yulia", salary: 50 },
  ];
  
  const SumSalary = arr =>
  arr.reduce((sum,{salary}) => sum + salary,0)
  
  const total = SumSalary(array)
  alert(total);