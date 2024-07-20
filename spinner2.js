const sentence = ["\r|  ", "\r/  ",  "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\n"];

setTimeout(() => {
    for (let i = 0; i < sentence.length; i++) {
      setTimeout(() => {
        process.stdout.write(sentence[i]);
      }, 200 * i);
    }
  });
  
