
export function IsPasswordValid(password) {
    const strength = {
        1: "Fraquissima",
        2: "Fraca",
        3: "Média",
        4: "Forte",
        5: "Muito forte",
      };
    
      let score = 0;
      if (password.length < 6) {
        return strength[1];
      }
    
      if (password.length >= 8) {
        score++;
      }
    
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