const imgType = (array) => {
  const type = array.type;
  if (type === "fire") {
    const logoFire = "../img/fire.png";
    return logoFire;
  } else if (type === "bug") {
    const logoBug = "../img/bug.png";
    return logoBug;
  } else if (type === "water") {
    const logoWater = "../img/water.png";
    return logoWater;
  } else if (type === "grass") {
    const logoGrass = "../img/grass.png";
    return logoGrass;
  } else if (type === "normal") {
    const logoNormal = "../img/normal.png";
    return logoNormal;
  } else {
    console.log("no found type");
  }
};

export default imgType;
