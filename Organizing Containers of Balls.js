const n = containers.length;

    // keep # of balls per container
    const containerCounts = new Array(n).fill(0);
    // keep # of types of balls
    const ballTypes = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        const container = containers[i];
        for(let j = 0; j < n; j++){
            const ballCount = container[j];
            containerCounts[i] += ballCount;
            ballTypes[j] += ballCount;
        }
    }
    // sort to make comparable
    containerCounts.sort();
    ballTypes.sort();
    for(let i = 0; i<n;i++){
        if(containerCounts[i] !== ballTypes[i]) return "Impossible";
    }

    return "Possible";
}

// Complete the organizingContainers function below.
function organizingContainers(container) {
  let result = true;

  let { row, col } = container.reduce(
    (target, items, index) => {
      items.reduce((itemTarget, item, subIndex) => {
        target["row"][index] += item;
        target["col"][subIndex] += item;

        return itemTarget;
      }, []);

      return target;
    },
    {
      row: new Array(container.length).fill(0),
      col: new Array(container.length).fill(0)
    }
  );

  row.sort();
  col.sort();

  for (let value of Array.from(
    { length: container.length },
    (value, index) => index
  )) {
    if (row[value] !== col[value]) {
      result = false;
      break;
    }
  }

  return result ? "Possible" : "Impossible";
}


function organizingContainers(container) {
  // Write your code here
  const totalBallCount = container.map((v) => v.reduce((a, c) => a + c));
  const totalBallTypeCount = Array(container[0].length).fill(0);
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container.length; j++) {
      totalBallTypeCount[i] += container[j][i];
    }
  }

  totalBallCount.sort((a, b) => a - b);
  totalBallTypeCount.sort((a, b) => a - b);

  return totalBallCount.every((v, i) => v === totalBallTypeCount[i])
    ? "Possible"
    : "Impossible";
}




