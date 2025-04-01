const quiz = document.querySelector(".quiz");
const loader = document.querySelector(".loader");

const questions = [
  {
    question:
      "If a doctor gives you three pills and tells you to take one every half hour, how long will they last?",
    options: ["1 hour", "1.5 hours", "2 hours", "3 hours"],
  },
  {
    question:
      "A farmer has 5 haystacks in one field and 4 in another. How many does he have if he combines them all?",
    options: ["1", "5", "9", "None"],
  },
  {
    question: "What is full of holes but still holds water?",
    options: ["A sponge", "A net", "A cup", "A bucket"],
  },
  {
    question: "What gets wetter as it dries?",
    options: ["A towel", "A sponge", "Water", "A river"],
  },
  {
    question:
      "If you pass the second person in a race, what position are you in?",
    options: ["Second", "First", "Third", "Last"],
  },
  {
    question: "Which weighs more: a pound of feathers or a pound of bricks?",
    options: [
      "Neither, they weigh the same",
      "Feathers",
      "Bricks",
      "Depends on gravity",
    ],
  },
  {
    question:
      "You see a boat filled with people. It hasn’t sunk, but when you look again, you don’t see a single person on board. Why?",
    options: [
      "They’re all married",
      "They jumped off",
      "The boat disappeared",
      "They went inside",
    ],
  },
  {
    question:
      "A father and son get into a car accident. The father dies. The son is taken to the hospital, but the doctor says, ‘I can’t operate on this boy. He is my son.’ How is this possible?",
    options: [
      "The doctor is his mother",
      "It’s a mistake",
      "He was adopted",
      "It’s his stepfather",
    ],
  },
  {
    question: "A rooster lays an egg on top of a barn. Which way does it roll?",
    options: ["Roosters don’t lay eggs", "Left", "Right", "Down"],
  },
  {
    question: "How can a man go eight days without sleep?",
    options: [
      "He sleeps at night",
      "He doesn’t need sleep",
      "He’s a robot",
      "He naps",
    ],
  },
  {
    question: "What do we celebrate on the first of April?",
    options: [
      "My Achalugo’s birthday",
      "April Fool",
      "World Prank Day",
      "Nothing special",
    ],
  },
  {
    question: "What has hands but can’t clap?",
    options: ["A clock", "A mannequin", "A statue", "A shadow"],
  },
  {
    question:
      "If you throw a blue stone into the Red Sea, what will it become?",
    options: ["Wet", "Red", "A fish", "Nothing changes"],
  },
];

function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

function loading() {
  quiz.style.display = "none";
  loader.style.display = "block";
  setTimeout(() => {
    quiz.style.display = "flex";
    loader.style.display = "none";
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.querySelector(".options");
  const answerSound = new Audio("./correctanswer.wav");
  const backgroundMusic = new Audio("./gameshow.wav");
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.3;
  backgroundMusic.play();

  function loadNewQuestion() {
    loading();
    const questionData = getRandomQuestion();
    questionElement.textContent = questionData.question;
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-button");
      button.addEventListener("click", function () {
        button.disabled = true;
        setTimeout(() => {
          answerSound.play();
          alert("Correct! Next question...");
          loadNewQuestion();
        }, 1000);
      });
      optionsContainer.appendChild(button);
    });
  }

  loadNewQuestion();
});
