let text = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"],
  ["He", "loves", "tacos", "jb"],
  ["He", "loves", "tacos", "b", "loves", "tacos"],
];
let position = ["LEFT", "RIGHT", "LEFT", "RIGHT", "LEFT"];
let limit = 30;

thirdTask(text, position, limit);

function thirdTask(textArray, positionArray, limit) {
  let borderString = `${"*".repeat(limit + 2)}`;
  console.log(borderString);
  textArray.forEach((el, i) => {
    if (positionArray[i] === "LEFT") {
      let newStr = el.join(" ");
      if (newStr.length > limit) {
        for (let i = 0; i < el.length / 3; i++) {
          let subArray = el.slice(i * 3, i * 3 + 3).join(" ");
          let fullString = `*${subArray}${" ".repeat(
            limit - subArray.length
          )}*`;
          console.log(fullString);
        }
      } else {
        let fullString = `*${newStr}${" ".repeat(limit - newStr.length)}*`;
        console.log(fullString);
      }
    } else if (positionArray[i] === "RIGHT") {
      let newStr = el.join(" ");
      if (newStr.length > limit) {
        for (let i = 0; i < el.length / 3; i++) {
          let subArray = el.slice(i * 3, i * 3 + 3).join(" ");
          let fullString = `*${" ".repeat(
            limit - subArray.length
          )}${subArray}*`;
          console.log(fullString);
        }
      } else {
        let fullString = `*${" ".repeat(limit - newStr.length)}${newStr}*`;
        console.log(fullString);
      }
    }
  });
  console.log(borderString);
  return 0;
}
