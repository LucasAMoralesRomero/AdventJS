function manufacture(gifts, materials) {
    function canManufacture(gift, materials) {
      const materialSet = new Set(materials);
  
      for (const char of gift) {
          if (!materialSet.has(char)) {
              return false;
          }
      }
  
      return true;
  }
      const result = [];
  
      for (const gift of gifts) {
          if (canManufacture(gift, materials)) {
              result.push(gift);
          }
      }
  
      return result;
  }
  