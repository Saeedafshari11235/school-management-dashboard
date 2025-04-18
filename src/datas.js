let chartData = [
  { month: "Jan", sale: 50 },
  { month: "Feb", sale: 200 },
  { month: "Mar", sale: 800 },
  { month: "Apr", sale: 900 },
  { month: "May", sale: 1_500 },
  { month: "Jun", sale: 700 },
  { month: "Jul", sale: 500 },
  { month: "Aug", sale: 200 },
  { month: "Sep", sale: 1100 },
  { month: "Oct", sale: 1500 },
  { month: "Nov", sale: 1800 },
  { month: "Dec", sale: 2200 },
];

let newMembers = [
  { id: 1, username: "saeed", jobTitle: "developer" },
  { id: 2, username: "amir", jobTitle: "developer" },
  { id: 3, username: "mammad", jobTitle: "engineer" },
  { id: 4, username: "saleh", jobTitle: "teacher" },
  { id: 5, username: "hesam", jobTitle: "designer" },
  { id: 6, username: "ali", jobTitle: "editor" },
];

let userRows = [
  {
    id: 1,
    username: "saeed",
    status: "active",
    transaction: "$120",
    email: "sample@email.com",
  },
  {
    id: 2,
    username: "amir",
    status: "non-active",
    transaction: "$10",
    email: "sample@email.com",
  },
  {
    id: 3,
    username: "saleh",
    status: "active",
    transaction: "$50",
    email: "sample@email.com",
  },
  {
    id: 4,
    username: "ali",
    status: "non-active",
    transaction: "$1220",
    email: "sample@email.com",
  },
  {
    id: 5,
    username: "mammad",
    status: "non-active",
    transaction: "$1020",
    email: "sample@email.com",
  },
];

let products = [
  { id: 1, title: "Asus", price: 900 },
  { id: 2, title: "Acer", price: 234 },
  { id: 3, title: "Dell", price: 850 },
  { id: 4, title: "LOQ", price: 100 },
  { id: 5, title: "Thinkpad", price: 220 },
  { id: 6, title: "ROG", price: 987 },
];

export { chartData, newMembers, userRows, products };
