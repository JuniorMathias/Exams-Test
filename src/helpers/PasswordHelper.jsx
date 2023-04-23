
export function IsPasswordValid(password) {
    const strength = {
        1: "Fraquissima",
        2: "Fraca",
        3: "Média",
        4: "Forte",
        5: "Muito forte",
      };
    
      let score = 0;
      //fraquissima
      if (password.length < 7) {
        return strength[1];
      }
    //fraca
      if (password.length >= 8) {
        score++;
      }
    
      //os demais vai de acordo com oq for digitado
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        score++;
      }
    
      if (/[\d]/.test(password)) {
        score++;
      }
    
      if (/[\W]/.test(password)) {
        score++;
      }
    
      return strength[score];
}