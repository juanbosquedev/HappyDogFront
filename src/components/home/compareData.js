

  const compareObjects = (obj1, obj2) => {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  

    return true;
  };
  
  export const hasChanged = (originalArray, updatedArray) => {
    if (originalArray.length !== updatedArray.length) {
      return true;
    }
  
    for (let i = 0; i < originalArray.length; i++) {
      if (!compareObjects(originalArray[i], updatedArray[i])) {
        return true; 
      }
    }
  
    return false;
  };
  
 