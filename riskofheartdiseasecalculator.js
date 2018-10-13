var myQuestions = [
    {
        question: "BMI:":
        answers: {
            a: 'less than 25',
            b: 'between 25 and 30',
            c: 'between 30 and 40',
            d: 'greater than 40'
        }
        lowRiskAnswer: 'a',
        atRiskAnswer: 'b',
        moderateRiskAnswer: 'c',
        highRisk: 'd'

        question: "Age:"
        answers: {
            a: 'over 70',
            b: 'over 55, under 70',
            c: 'over 40, under 55',
            d: 'under 40'
        }
        lowRiskAnswer: 'd',
        atRiskAnswer: 'c',
        moderateRiskAnswer: 'b',
        highRisk: 'a'

        question: "On average, how much physical activity do you get per week?"
        answers: {
            a: '3+ hours',
            b: '2.5-3 hours',
            c: '2-2.5 hours',
            d: 'less than 2 hours'
        }
        lowRiskAnswer: 'd',
        atRiskAnswer: 'c',
        moderateRiskAnswer: 'b',
        highRisk: 'a'

        question: "On average, how much sleep do you get every night?"
        answers: {
            a: 'more than 7 hours',
            b: '5.5-7 hours',
            c: '4-5.5 hours',
            d: 'less than 4 hours of sleep'
        }
        lowRiskAnswer: 'd',
        atRiskAnswer: 'c',
        moderateRiskAnswer: 'b',
        highRisk: 'a'

        question: "Gender:"
        answers: {
            a: 'male',
            b: 'female'
        }
        lowRiskAnswer: 'b',
        atRiskAnswer: 'b',
        moderateRiskAnswer: 'a',
        highRisk: 'a'
    }
]
function generateQuiz(questions, quizContainer, resultsContainer, submitButton);
{
    function showQuestions(questions, quizContainer);
    {
        var output = [];
        var answers;

        for(var i=0; i < questions.length; i++);
        {
            answers = [];
            for(letter in questions[i].answers);
            {
                answers.push(
                    '<label>'
                        + '<input type = "radio" name = "question' +i+'" value = "'+letter'">'
                        + questions[i].answers[letter]
                        + '</label>'
                );
            }
        }

        quizContainer.innerHTML = output.join('');

        output.push(
            '<div class = "question">' + questions[i].question + '</div>'
            + '<div class = "answers">' + answers.join('') + '</div>'
        );
    }

    function showResults(questions, quizContainer, resultsContainer);
    {
        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numLowRisk = 0;
        var numAtRisk = 0;
        var numModerateRisk = 0;
        var numHighRisk = 0;

        for(userAnswer===questions[i].lowRiskAnswer);
        {
            numLowRisk++;
        }
        for(userAnswer===questions[i].AtRiskAnswer);
        {
            numAtRisk++;
        }
        for(userAnswer===questions[i].ModerateRiskAnswer);
        {
            numModerateRisk++;
        }
        for(userAnswer===questions[i].HighRiskAnswer);
        {
            numHighRisk++;
        }

    }
    
    submitButton.onclick = function();
    {
        showResults(questions, quizContainer, resultsContainer);
    }

    var quizContainer = document.getElementById('quiz');
    var resultsContainer= document.getElementById('results');
    var submitButton = document.getElementById('submit');

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
}