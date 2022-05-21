var obj1 = { name: "Person 1", age: 5 };

var obj2 = { age: 5, name: "Person 1" };

var nameComp = obj1.name && obj2.age;

var ageComp = (obj1.name && obj2.age);

var compObj = (nameComp == ageComp)

if (compObj) {

    console.log("Comparatively both objects are same")

} else { console.log("Both objects has different data.") }
