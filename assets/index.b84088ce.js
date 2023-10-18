import{H as x,T as q}from"./components.69a0d22b.js";import{_ as E,a as N}from"./Button.c47e345f.js";import{_ as w,m as A,f as p,g as P,h as S,i as j,j as T,o as r,c as u,r as B,d as y,t as b,k as H,a as d,l as R,w as f,b as l,n as v,F as k,q as O}from"./entry.939d9ead.js";import{b as $,u as C,t as J,_ as U}from"./Container.42ac9257.js";import"./nuxt-link.a53eca01.js";const s=A(p.ui.strategy,p.ui.badge,$),z=P({inheritAttrs:!1,props:{size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...p.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:t,attrs:i}=C("badge",S(e,"ui"),s),m=j(()=>{var o,c;const n=((c=(o=t.value.color)==null?void 0:o[e.color])==null?void 0:c[e.variant])||t.value.variant[e.variant];return J(T(t.value.base,t.value.font,t.value.rounded,t.value.size[e.size],n==null?void 0:n.replaceAll("{color}",e.color)),e.class)});return{attrs:i,badgeClass:m}}});function M(e,t,i,m,n,o){return r(),u("span",H({class:e.badgeClass},e.attrs),[B(e.$slots,"default",{},()=>[y(b(e.label),1)])],16)}const W=w(z,[["render",M]]),a={BEGINNER:"Beginner",JUNIOR:"Junior",INTERMEDIATE:"Intermediate",SENIOR:"Senior"},D={props:{question:{type:String,required:!0},answer:{type:String,required:!0},difficulty:{type:String,required:!1,default:a.BEGINNER,validator:function(e){return[a.BEGINNER,a.JUNIOR,a.INTERMEDIATE,a.SENIOR].includes(e)}}},computed:{badge_color(){switch(this.difficulty){case a.BEGINNER:return"green";case a.JUNIOR:return"sky";case a.INTERMEDIATE:return"yellow";case a.SENIOR:return"orange"}}},data(){return{has_liked:!1}},methods:{like(){console.log("User loved this question"),this.has_liked=!0}}},G={class:"flex flex-col items-start border-b-2 border-gray-800 mb-3 pb-2"},V={class:"flex flex-row justify-between items-stretch w-full mb-3"},F={class:"text-2xl font-bold"},L=d("span",{class:"text-gray-500 select-none"},"Q:",-1),Q={class:"text-justify"},Y={class:"flex flex-row justify-end items-center w-full mt-3"},K={key:1,class:"text-green-900 mr-3"};function X(e,t,i,m,n,o){const c=E,h=N,_=W;return r(),u("div",G,[d("div",V,[d("h1",F,[L,y(" "+b(i.question),1)])]),d("p",Q,b(i.answer),1),d("div",Y,[n.has_liked?v("",!0):(r(),R(h,{key:0,onClick:o.like,size:"sm",variant:"link",color:"gray"},{default:f(()=>[l(c,{name:"i-heroicons-hand-thumb-up"})]),_:1},8,["onClick"])),n.has_liked?(r(),u("p",K,"Thanks!")):v("",!0),l(_,{size:"xs",variant:"solid",class:"select-none",color:o.badge_color},{default:f(()=>[y(b(i.difficulty),1)]),_:1},8,["color"])])])}const Z=w(D,[["render",X]]),ee={data(){return{questions_answers:[{question:"What is the difference between a language construct and a “built-in” function in PHP?",answer:"A language construct is a predefined code block that is built into the PHP engine, whereas a built-in function is a code block that is defined in PHP but built into the PHP core at compile time.",difficulty:"Junior"},{question:"How many bits are in a byte?",answer:"There are 8 bits in a byte. A bit is a binary digit, taking a value of either 0 or 1. A byte is a sequence of bits; usually eight bits equal one byte. Bytes are a unit of digital information that most commonly consists of eight bits.",difficulty:"Beginner"},{question:"What is the difference between a static and a non-static class?",answer:"A static class cannot be instantiated (i.e., you cannot create new instances of a static class) and all of its members are static by default. A non-static class can be instantiated (i.e., you can create new instances of a non-static class) and its members are non-static by default.",difficulty:"Intermediate"},{question:"How do you center an element in CSS?",answer:"To center an element horizontally, use margin: auto; To center an element vertically, use position: relative; top: 50%; and transform: translateY(-50%);",difficulty:"Senior"},{question:"What is the difference between a language construct and a 'built-in' function in PHP?",answer:"A language construct is a predefined code block that is built into the PHP engine, whereas a built-in function is a code block that is defined in PHP but built into the PHP core at compile time.",difficulty:"Junior"},{question:"How many bits are in a byte?",answer:"There are 8 bits in a byte. A bit is a binary digit, taking a value of either 0 or 1. A byte is a sequence of bits; usually eight bits equal one byte. Bytes are a unit of digital information that most commonly consists of eight bits.",difficulty:"Beginner"},{question:"What is the difference between a static and a non-static class?",answer:"A static class cannot be instantiated (i.e., you cannot create new instances of a static class) and all of its members are static by default. A non-static class can be instantiated (i.e., you can create new instances of a non-static class) and its members are non-static by default.",difficulty:"Intermediate"},{question:"What is the purpose of an abstract class in Java?",answer:"An abstract class in Java is a class that cannot be instantiated and is typically used as a base class for other classes. It allows you to define methods that must be implemented by any concrete subclass while also allowing you to provide some common method implementations.",difficulty:"Intermediate"},{question:"Explain the concept of polymorphism in object-oriented programming.",answer:"Polymorphism in object-oriented programming allows objects of different classes to be treated as objects of a common superclass. It enables flexibility and reusability in code by invoking methods on objects without knowing their specific class type, as long as they are derived from a common base class.",difficulty:"Intermediate"},{question:"What is the purpose of the 'finally' block in a try-catch-finally statement in programming?",answer:"The 'finally' block in a try-catch-finally statement is used to specify code that must be executed, regardless of whether an exception is thrown or not. It's often used for resource cleanup or to ensure that certain actions are taken, such as closing files or releasing resources, even if an exception occurs in the 'try' block.",difficulty:"Intermediate"}]}}};function te(e,t,i,m,n,o){const c=q,h=x,_=Z,I=U;return r(),u(k,null,[l(h,null,{default:f(()=>[l(c,null,{default:f(()=>[y("Mosahebe")]),_:1})]),_:1}),l(I,{class:"w-full md:w-1/2"},{default:f(()=>[(r(!0),u(k,null,O(n.questions_answers,g=>(r(),u("div",null,[l(_,{question:g.question,answer:g.answer,difficulty:g.difficulty},null,8,["question","answer","difficulty"])]))),256))]),_:1})],64)}const re=w(ee,[["render",te]]);export{re as default};
