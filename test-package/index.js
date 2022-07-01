import clone from "@ohmiler/object-cloner";

let obj = { 
    tutor: { 
        name: "ohmiler", 
        id: 123 
    } 
};
let objClone = clone(obj);
delete objClone.tutor.id;
console.log("- obj", obj);
console.log("- objClone", objClone);