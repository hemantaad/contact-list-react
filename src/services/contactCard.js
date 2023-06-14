const contacts = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    firstName: "Hemanta",
    lastName: "Adhikari",
    email: "hemanta@gmail.com",
    contact: "9874563210",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    firstName: "Aditya",
    lastName: "Adhikari",
    email: "aditya@gmail.com",
    contact: "9478523699",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    firstName: "Ramesh",
    lastName: "Sharma",
    email: "ramesh@gmail.com",
    contact: "9456328741",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    firstName: "Mahesh",
    lastName: "Timalsina",
    email: "mahesh@gmail.com",
    contact: "9202147896",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    firstName: "Adeet",
    lastName: "Dahal",
    email: "adeet@gmail.com",
    contact: "9863214557",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    firstName: "Anish",
    lastName: "Tandukar",
    email: "anish@gmail.com",
    contact: "9874256354",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471835",
    firstName: "Subhashish",
    lastName: "Basnet",
    email: "subhashish@gmail.com",
    contact: "9874563210",
  },
];

export function getContacts() {
  return contacts;
}

export function getContact(id) {
  return contacts.find((c) => c._id === id);
}
