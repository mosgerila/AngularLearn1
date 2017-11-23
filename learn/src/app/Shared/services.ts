import {Service} from './service';

export const serv: Service[]= [
    { name:'Tuns Babati',
     image:'../assets/images/barb1.jpg',
     label:'Hot',
     price:'55',
     time:'23 Min',
     description:'Tuns standart',
     comments:[
         { 
             rating:5,
             commentariu:"Foarte bine lucreaza",
             author: "Mos Craciun",
             date:"2015-10-16T17:57:28.556094Z",

         },

         { 
            rating:4,
            commentariu:"Foarte bine lucreaza,dar incet",
            author: "Ajutorul mosului",
            date:"2016-03-08T18:57:28.556094Z",

        },

     ],
    },
    { name:'Tuns Femei',
    image:'../assets/images/fem1.jpg',
    label:'Beautiful',
    price:'73',
    time:'45 Min',
    description:'Tuns standart',

   comments:[
    { 
        rating:5,
        commentariu:"Foarte bine lucreaza",
        author: "Alba ca Zapada",
        date:"2015-10-16T17:57:28.556094Z",

    },

    { 
       rating:3,
       commentariu:"Foarte bine lucreaza,dar incet",
       author: "Ajutorul mosului",
       date:'2016-03-08T18:57:28.556094Z',

   },

],
},

];