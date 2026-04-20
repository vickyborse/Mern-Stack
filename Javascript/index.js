function getData() {
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0.3;

    setTimeout(() => {
      if (success) {
        resolve({ msg: "Data loaded", time: new Date().toLocaleTimeString() });
      } else {
        reject("Error while fetching data");
      }
    }, 1000);
  });
}

async function run() {
  try {
    let res = await getData();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

run();
