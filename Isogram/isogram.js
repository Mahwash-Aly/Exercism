//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function isIsogram(str){
    str = str.toLowerCase();
    // let len = str.length;
    // let arr = str.split("")
    // arr.sort();
    str = str.replace(/ /g, "");
    str = str.replace(/-/g, "");

    return new Set(str).size === str.length;
};
