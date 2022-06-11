const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {
  const dataIXX = await promiseTheaterIXX();
  const dataVGC = await promiseTheaterVGC();
  let countHasil = 0;
  let allData = [...dataIXX, ...dataVGC];

  allData.forEach((data) => {
    if (data.hasil === emosi) {
      countHasil++;
    }
  });

  return countHasil;
};

module.exports = {
  promiseOutput,
};
