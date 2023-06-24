import { footerElements } from "./scripts/data/dataDom.js";
import { printFooter } from "./scripts/modules/printFooter.js";

footerElements.forEach((footer) => {
  footer.addEventListener("click", printFooter);
});
