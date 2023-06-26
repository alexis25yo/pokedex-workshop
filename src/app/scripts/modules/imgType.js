const imgType = (array) => {
  const type = array.type;
  if (type === "fire") {
    const logoFire = "../app/img/fire.png";
    return logoFire;
  } else if (type === "bug") {
    const logoBug = "../app/img/bug.png";
    return logoBug;
  } else if (type === "water") {
    const logoWater = "../app/img/water.png";
    return logoWater;
  } else if (type === "grass") {
    const logoGrass = "../app/img/grass.png";
    return logoGrass;
  } else if (type === "normal") {
    const logoNormal = "../app/img/normal.png";
    return logoNormal;
  } else {
    console.log("no found type");
  }
};

export default imgType;
