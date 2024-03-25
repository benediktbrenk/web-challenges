console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const article = document.createElement("article");
document.body.append(article);
article.classList = "post";

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
p.classList = "post__content";
article.append(p);

const footer = document.createElement("footer");
footer.classList = "post__footer";
article.append(footer);

const span = document.createElement("span");
span.textContent = "@username";
span.classList = "post__username";
footer.append(span);

const button = document.createElement("button");
button.textContent = "♥ Like";
button.classList = "post__button";
button.setAttribute("data-js", "like-button");
console.log(button);
footer.append(button);

// const template = document.querySelector("[data-js=template]");

// const newPost = template.cloneNode(true);
// document.body.append(newPost);
// const newText = newPost.querySelector("p");
// newText.textContent = "Text";

const likeButtons = document.querySelectorAll('[data-js="like-button"]');

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", handleLikeButtonClick);
});

// Exercise:
// Use document.createElement() and append another social media post to the body.
