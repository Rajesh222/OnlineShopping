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
  title:"book1",
  description:" description...",
  price:10,
  src:"img/book1.jpg",
  isSoldOut: true,
},

{
  id:2,
  category: "books",
  title:"book2",
  description:" description...",
  price:10,
  src:"img/book2.jpg",

},

{
  id:3,
  category: "books",
  title:"book3",
  description:" description...",
  price:10,
  src:"img/book3.jpg"
},

{
  id:4,
  category: "books",
  title:"book4",
  description:" description...",
  price:10,
  src:"img/book4.jpg"
},
{
  id:5,
  category: "books",
  title:"book5",
  description:" description...",
  price:10,
  src:"img/book5.jpg"
},
{
  id:6,
  category: "books",
  title:"book6",
  description:" description...",
  price:10,
  src:"img/book6.jpg"
},
{
  id:7,
  category: "electronics",
  title:"mobile1",
  description:" description...",
  price:6000,
  src:"img/mobile1.jpg"
},

{
  id:8,
  category: "electronics",
  title:"mobile2",
  description:" description...",
  price:10000,
  src:"img/mobile2.jpg"
},

{
  id:9,
  category: "electronics",
  title:"mobile3",
  description:" description...",
  price:9000,
  src:"img/mobile3.jpg"
},

{
  id:10,
  category: "men",
  title:"men1",
  description:" description...",
  price:900,
  src:"img/men1.jpg"
},
{
  id:11,
  category: "men",
  title:"men2",
  description:" description...",
  price:900,
  src:"img/men2.jpg"
},
{
  id:12,
  category: "men",
  title:"men3",
  description:" description...",
  price:900,
  src:"img/men3.jpg"
},
{
  id:13,
  category: "men",
  title:"men4",
  description:" description...",
  price:900,
  src:"img/men4.jpg"
},
{
  id:14,
  category: "men",
  title:"men5",
  description:" description...",
  price:900,
  src:"img/men5.jpg"
},
{
  id:15,
  category: "men",
  title:"men6",
  description:" description...",
  price:900,
  src:"img/men6.jpg"
},
{
  id:16,
  category: "men",
  title:"men7",
  description:" description...",
  price:900,
  src:"img/men7.jpg"
},

{
  id:17,
  category: "women",
  title:"women1",
  description:" description...",
  price:1000,
  src:"img/women1.jpg"
},

{
  id:18,
  category: "women",
  title:"women2",
  description:" description...",
  price:1000,
  src:"img/women2.jpg"
},

{
  id:19,
  category: "women",
  title:"women3",
  description:" description...",
  price:1000,
  src:"img/women3.jpg"
},

{
  id:20,
  category: "women",
  title:"women4",
  description:" description...",
  price:1000,
  src:"img/women4.jpg"
},

{
  id:21,
  category: "women",
  title:"women5",
  description:" description...",
  price:1000,
  src:"img/women5.jpg"
},

{
  id:22,
  category: "women",
  title:"women6",
  description:" description...",
  price:1000,
  src:"img/women6.jpg"
},

]

});