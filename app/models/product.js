import DS from "ember-data";


export default DS.Model.extend({
  category:DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  src:DS.attr('string'),
  productStatus: DS.attr('string'),
  isSoldOut:DS.attr('boolean',{defaultValue: false}),





}).reopenClass({

FIXTURES: [{
  id:1,
  category: "books",
  title:"Mathematics",
  description:" description...",
  price:10,
  src:"img/book1.jpg",
},

{
  id:2,
  category: "books",
  title:"Chemistry",
  description:" description...",
  price:10,
  src:"img/book2.jpg",

},

{
  id:3,
  category: "business Studies",
  title:"book3",
  description:" description...",
  price:10,
  src:"img/book3.jpg"
},

{
  id:4,
  category: "books",
  title:"Science",
  description:" description...",
  price:10,
  src:"img/book4.jpg"
},
{
  id:5,
  category: "books",
  title:"Sucess Master",
  description:" description...",
  price:10,
  src:"img/book5.jpg"
},
{
  id:6,
  category: "books",
  title:"Mathematics Class XI",
  description:" description...",
  price:10,
  src:"img/book6.jpg"
},
{
  id:7,
  category: "electronics",
  title:"Nokia",
  description:" description...",
  price:6000,
  src:"img/mobile1.jpg"
},

{
  id:8,
  category: "electronics",
  title:"Samsung",
  description:" description...",
  price:10000,
  src:"img/mobile2.jpg"
},

{
  id:9,
  category: "electronics",
  title:"Samsung",
  description:" description...",
  price:9000,
  src:"img/mobile3.jpg"
},

{
  id:10,
  category: "men",
  title:"shirt balck",
  description:" description...",
  price:900,
  src:"img/men1.jpg"
},
{
  id:11,
  category: "men",
  title:"Jacket",
  description:" description...",
  price:900,
  src:"img/men2.jpg"
},
{
  id:12,
  category: "men",
  title:"Trouser",
  description:" description...",
  price:900,
  src:"img/men3.jpg"
},
{
  id:13,
  category: "men",
  title:"Jeans",
  description:" description...",
  price:900,
  src:"img/men4.jpg"
},
{
  id:14,
  category: "men",
  title:"Lining shirt",
  description:" description...",
  price:900,
  src:"img/men5.jpg"
},
{
  id:15,
  category: "men",
  title:"Grenn Serwani",
  description:" description...",
  price:900,
  src:"img/men6.jpg"
},
{
  id:16,
  category: "men",
  title:"Half shirt",
  description:" description...",
  price:900,
  src:"img/men7.jpg"
},

{
  id:17,
  category: "women",
  title:"top",
  description:" description...",
  price:1000,
  src:"img/women1.jpg"
},

{
  id:18,
  category: "women",
  title:"skirt",
  description:" description...",
  price:1000,
  src:"img/women2.jpg"
},

{
  id:19,
  category: "women",
  title:"pink top",
  description:" description...",
  price:1000,
  src:"img/women3.jpg"
},

{
  id:20,
  category: "women",
  title:"Jacket",
  description:" description...",
  price:1000,
  src:"img/women4.jpg"
},

{
  id:21,
  category: "women",
  title:"red top",
  description:" description...",
  price:1000,
  src:"img/women5.jpg"
},

{
  id:22,
  category: "women",
  title:"red top",
  description:" description...",
  price:1000,
  src:"img/women6.jpg"
},

]

});