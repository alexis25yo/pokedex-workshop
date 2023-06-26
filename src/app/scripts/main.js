import "../styles/styles.sass"
import { footerElements } from "./scripts.js/data/dataDom.js";
import { printFooter } from "./scripts.js/modules/printFooter.js";

footerElements.forEach((footer) => {
  footer.addEventListener("click", printFooter);
});