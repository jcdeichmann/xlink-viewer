

export function prioritizeData(datas) {
  console.log("datas: " + datas);
  var priorityKeys = ["Animal Number", "Away", "Robot", "Interval Exceed"];

  var sort = (x, y) => {
    var xInd = priorityKeys.indexOf(x);
    var yInd = priorityKeys.indexOf(y);

    xInd = xInd == -1 ? 1000 : xInd;
    yInd = yInd == -1 ? 1000 : yInd;

    if (xInd < yInd) {
      return -1;
    } else {
      return 0;
    }
  };

  var ordered = datas.map(function (data) {
    return Object.keys(data).sort(sort).reduce(
      (obj, key) => {
        obj[key] = data[key];
        return obj;
      },
      {}
    );
  });

  console.log("ordered: " + ordered);

  return ordered;
}
