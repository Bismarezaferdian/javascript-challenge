const valildBracket = (s) => {
  let bracket = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      bracket.push(s[i]);
    } else {
      // if (bracket.length === 0) return false;
      lastValue = bracket[bracket.length - 1];
      if (
        (s[i] === ")" && lastValue === "(") ||
        (s[i] === "}" && lastValue === "{") ||
        (s[i] === "]" && lastValue === "[")
      ) {
        bracket.pop();
      }
    }
  }
  return bracket.length === 0;
};

console.log(valildBracket("()")); // true
