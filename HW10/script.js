//T1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


//T2
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names:[name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26


//T3
function mul(...elements) {
   if (elements.filter(Number.isFinite).length != 0){
   return elements.filter(Number.isFinite).reduce((a, b) => a * b);
   }else return 0;
    
}
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0


 //T4
 let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => {
         return this.data + "";
      });
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {


      return ( (callback) =>{
         this.result = callback();
      });
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//T5
function mapBuilder(keysArray, valuesArray) {
let result = new Map();
if(keysArray.length != valuesArray.length){
   return "keysArray.length != valuesArrays.length";
} else {
   
      for(let i = 0; i < keysArray.length; i++){
         result.set(keysArray[i], valuesArray[i]);
      };
      return result;
   }
  
}



let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
	console.log(map.get(2)); // "span"

