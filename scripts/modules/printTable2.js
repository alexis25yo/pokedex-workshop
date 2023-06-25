import { tbody2 } from "../data/dataDom.js";

const printTable2 = (array) => {
  let container = tbody2;
  const type = array.type;
  const hability = array.hability;
  const height = array.height;
  const weight = array.weight;
  const no = array.no;
  const level = array.level;
  container.innerHTML = `
          <tr>
              <td><span>NO.</span>${no}</td>
            </tr>
            <tr>
              <td><span>LEVEL</span>${level}</td>
            </tr>
            <tr>
            <td><span>TYPE</span>${type}</td>
            </tr>
            <tr>              
              <td><span>HABILITY</span>${hability}</td>
            </tr>
            <tr>
              <td><span>HEIGHT</span> ${height}  </td>
            </tr>
            <tr>
              <td><span>WEIGHT</span> ${weight} Kg</td>
            </tr>
  `;
};

export default printTable2;
