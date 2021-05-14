// первое задание
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль")
    } else if (i % 2 != 0) {
        console.log(i + " - нечетное число")
    } else {
        console.log(i + " - четное число")
    }
}

//второе задание
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },

        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author); //"John"
console.log(post.comments[0].rating.dislikes); //2
console.log(post.comments[1].userId); //5
console.log(post.comments[1].text);  //"lorem ipsum 2"

//третье задание
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (number) {
    number.price = number.price - ((number.price / 100) * 15);
});

console.log(products)

// четвертое задание
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },

    {
        id: 5,
        price: 499,
        photos: []
    },

    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
/*
let img = products.filter(function (number) {
    if ("photos" in number) {

    } else if (number.photos.length > 0) {

    }
    // c этой функцией всю голову сломал, не могу поиграть с написанием , что бы понять логику, т к number.photos.length выдает ошибку, а почему вообще не соображу 
});
console.log(img);
*/

//Этот Вариант работает
let = img = products.filter(number => "photos" in number && number.photos.length > 0);
console.log(img);

products.sort(function (a, b) {
    return a.price - b.price;
});

console.log(products);

// Шестое задание
let x = "x";
for (i = 1; i <= 20; i++) {
    console.log(x);
    x = x + "x";
}