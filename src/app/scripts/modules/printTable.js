import { tbody } from "../data/dataDom";

const printTable = (array) => {
  let container = tbody;
  const type = array.type;
  const hability = array.hability;
  const height = array.height;
  const weight = array.weight;
  const no = array.no;
  const level = array.level;
  container.innerHTML = `
          <tr>
              <td><span>NO.</span> <br />${no}</td>
              <td><span>LEVEL</span> <br />${level}</td>
            </tr>
            <tr>
              <td><span>TYPE</span> <br />${type}</td>
              <td><span>HABILITY</span> <br />${hability}</td>
            </tr>
            <tr>
              <td><span>HEIGHT</span> <br />${height} </td>
              <td><span>WEIGHT</span> <br />${weight} Kg</td>
          </tr>  
  `;
};

export default printTable;
