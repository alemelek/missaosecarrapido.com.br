function toggleFaq(index) {
  const arrowIconDownElement =
    document.getElementsByClassName("arrow-icon-down");
  const arrowIconUpElement = document.getElementsByClassName("arrow-icon-up");
  const answerElement = document.getElementsByClassName("answer");

  arrowIconDownElement[index].classList.toggle("invisible");
  arrowIconUpElement[index].classList.toggle("visible");
  answerElement[index].classList.toggle("visible");
}
