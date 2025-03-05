async function askQuestion() {
    const question = document.getElementById("question").value;
    const answerDiv = document.getElementById("answer");

    if (!question) {
        answerDiv.innerHTML = "Please enter a question.";
        return;
    }

    answerDiv.innerHTML = "Thinking...";

    try {
        const response = await fetch("https://ai-backend-945t-oq3szjfns-rgs-projects-891f288c.vercel.app", {  // Replace with your Vercel backend URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: question })
        });

        const data = await response.json();
        answerDiv.innerHTML = data.answer;
    } catch (error) {
        answerDiv.innerHTML = "Error getting the answer. Please try again.";
        console.error(error);
    }
}
