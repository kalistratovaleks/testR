let text = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"],
];

let position = ["LEFT", "RIGHT", "LEFT"];

let limit = 16;

thirdTask(text, position, limit);

function thirdTask(textArray, positionArray, limit) {
  let firstStr = textArray[0];
  let secondStr = textArray[1];
  let thirdStr = textArray[2];

  console.log(`${"*".repeat(limit + 2)}`);

  if (positionArray[0] === "LEFT") {
    console.log(
      `*${firstStr.toString().replace(/,/g, " ")}${" ".repeat(
        limit - firstStr.toString().length
      )}*`
    );
  } else {
    console.log(
      `*${" ".repeat(limit - firstStr.toString().length)}${firstStr
        .toString()
        .replace(/,/g, " ")}*`
    );
  }

  if (secondStr.toString().length <= limit) {
    if (positionArray[1] === "LEFT") {
      console.log(
        `*${secondStr.toString().replace(/,/g, " ")}${" ".repeat(
          limit - secondStr.toString().length
        )}*`
      );
    } else {
      console.log(
        `*${" ".repeat(limit - secondStr.toString().length)}${secondStr
          .toString()
          .replace(/,/g, " ")}*`
      );
    }
  } else {
    let firstPartOfSecondStr = secondStr.slice(0, 3);
    let secondPartOfSecondStr = secondStr.slice(3, 6);
    if (positionArray[1] === "LEFT") {
      console.log(
        `*${firstPartOfSecondStr.toString().replace(/,/g, " ")}${" ".repeat(
          limit - firstPartOfSecondStr.toString().length
        )}*`
      );
      console.log(
        `*${secondPartOfSecondStr.toString().replace(/,/g, " ")}${" ".repeat(
          limit - secondPartOfSecondStr.toString().length
        )}*`
      );
    } else {
      console.log(
        `*${" ".repeat(
          limit - firstPartOfSecondStr.toString().length
        )}${firstPartOfSecondStr.toString().replace(/,/g, " ")}*`
      );
      console.log(
        `*${" ".repeat(
          limit - secondPartOfSecondStr.toString().length
        )}${secondPartOfSecondStr.toString().replace(/,/g, " ")}*`
      );
    }
  }

  if (positionArray[2] === "LEFT") {
    console.log(
      `*${thirdStr.toString().replace(/,/g, " ")}${" ".repeat(
        limit - thirdStr.toString().length
      )}*`
    );
  } else {
    console.log(
      `*${" ".repeat(limit - thirdStr.toString().length)}${thirdStr
        .toString()
        .replace(/,/g, " ")}*`
    );
  }
  console.log(`${"*".repeat(limit + 2)}`);
}
