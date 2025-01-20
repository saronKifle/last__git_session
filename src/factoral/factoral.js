const factotial = (number) => {
    if (number <= 1) {
      return 1;
    }
  
    return number * factotial(number - 1);
  };