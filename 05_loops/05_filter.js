// ✅ filter(callbackFun);
//ye callbackfun array ke elements ko one by one as an paramet. leta he and us pr kuch condtion apply krta, yadi condtion true hoti he to item ko return krdeta he

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even_arr = arr.filter((item)=> item%2 == 0)

// console.log(even_arr); //[ 2, 4, 6, 8, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks1 = books.filter( (bk) => bk.genre === 'History')

  userBooks1 = books.filter( (bk) => { 
    return bk.genre == 'History'
})
  console.log(userBooks1);


  let userBooks2 = books.filter( (bk) => bk.genre === 'History')

  userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks2);