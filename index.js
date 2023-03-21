// code your solution here
function saturdayFun(message = "roller-skate") {
  return `This Saturday, I want to ${message}!`;
}

const mondayWork = function (message = "go to the office") {
  return `This Monday, I will ${message}.`;
};

function wrapAdjective(flair = "*") {
  return function (adj = "crazy") {
    const withFlair = flair + adj + flair;
    return `You are ${withFlair}!`;
  };
}
