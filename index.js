export default function MkDataAttribute(ele) {

  return {

    int(attrName, defaultVal) {
   
      const parsedVal =  parseInt(ele.dataset[attrName]);
      return isNaN(parsedVal) ? defaultVal : parsedVal;
    },
    
    str(attrName, defaultVal) {
      
      const attrVal = ele.dataset[attrName];

      return attrVal || defaultVal;
    }
  };
}

