"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            id : 0,
            title: "What is the next number in the sequence: 2, 4, 8, 16, __",
            options: ["20", "24", "32", "64"]
        }, {
            id : 1,
            title: "Which planet is known as the Red Planet",
            options: ["Mars", "Earth", "Venus", "Mercury"]
        }, {
            id : 2,
            title: "Which of the following is a prime number?",
            options: [
                "1",
                "4",
                "7",
                "21"]
        }, {
            id : 3,
            title: "If you rearrange the letters NLOODN, you get the name of which country?",
            options: [
                'INDIA',
                'COLOMBO',
                'LONDON',
                'ICELAND'
            ]
        }, {
            id : 4,
            title: 'What is the square root of 144?',
            options: [
                '12',
                '13',
                '8',
                '14',
            ]
        }, {
            id : 5,
            title: 'How many sides does a heptagon have?',
            options: [
                '5',
                '6',
                '7',
                '8',
            ]
        }, {
            id : 6,
            title: 'Who is famous for painting the Mona Lisa?',
            options: [
                'Leonardo da Vinci',
                'Vincent van Gogh',
                'Pablo Picasso',
                'Michelangelo',
            ]
        },
    ];

    quiz = new Quiz(
        "Puzzle Pulse",
        `Puzzle Pulse is a fun new way to practice, improve, and test your Javascript skills.`,
        70,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();


