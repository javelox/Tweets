const Limit = 280;
const limit_min = 230;
let name = document.getElementById("name");
let comment = document.getElementById("comment");
const mainContent = document.getElementById("main-container");

send.onclick = function (e) {
  e.preventDefault();

  const comment_result = document.createElement("div");
  const result_comment = document.createElement("p");


  text_name.textContent = name.value;
  text_letter.textContent = name.value.trim().charAt(0).toUpperCase() ;
  
  result_comment.textContent = `Your comment is: ${comment.value.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}`;

  comment_result.classList.add("comment_result");
  result_comment.classList.add("result_comment");

  comment_result.appendChild(result_comment);
  mainContent.appendChild(comment_result);

  window.setTimeout(() => {
    comment.value = "";
    counter.textContent = 280;
  }, 1000);
};

uppercase.onclick = function (e) {
  e.preventDefault();

  comment.value = comment.value.toUpperCase();
};

lowercase.onclick = function (e) {
  e.preventDefault();

  comment.value = comment.value.toLowerCase();
};

comment.addEventListener("input", () => {
  const { value } = comment;
  counter.textContent = Limit - value.length;

  if (value.length >= Limit) {
    Invalid();
  } else {
    Valid();
  }

  if (value.length >= limit_min) {
    warning();
  } else {
    clean();
  }
});

const Invalid = () => {
  error.style.display = "block";
  send.disabled = true;
};

const Valid = () => {
  error.style.display = "none";
  send.disabled = false;
};

const warning = () => {
  counter.style.color = "#ff0000";
};

const clean = () => {
  counter.style.color = "#fff";
};



//-------------------------------------------------------------------------------------------------------------
