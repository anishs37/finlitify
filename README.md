# FinLitify
![finlitify logo](img_tp.gif)
### Gamifying Your Way to Financial Literacy 

## Why did we build it?
As current undergraduate freshmen at NYU being in the city for the first time, we find it hard to manage our finances, but moreso, we realize the lack of knowledge we’ve had on some crucial areas of budgeting, savings, and even taxes 🙁. Some of us have even tried financial tutorials in the past to make sense of all these financial buzzwords and know-how, but we’ve been deterred because of how complicated they are. We were lost and were without confidence in our finances (and our first few months have proved it).

But imagine a world where everyone has the knowledge and confidence to make informed financial decisions. Introducing Finlitify, where we aim to bridge the gap by “gamifying” financial literacy by integrating Computer Adaptive Testing (CAT) abilities to adapt lessons and quizzes to a user's skill level making for an engaging, rewarding, and appropriately challenging learning experience. Inspired by the belief that financial empowerment is the key to a secure future, this project challenges participants to test and enhance their financial acumen.

## How we made it and what it does
Finlitify aims to build and enhance financial literacy in three domains: budgeting, savings, and taxes, because we believe it is never too early (or late) to start learning these crucial concepts.

We first start with base lessons for every user. On the base lesson screen, users can read through content regarding the concepts of the tutorial. After the lesson and before the quiz for that content, users can type financial-related questions into a Wolfram search query bar. We first debated whether to use a chatbot like ChatGPT, but we decided against it. In contrast, Wolfram Alpha is guaranteed to give the correct answer since it internally pulls all the information from its curated and fact-checked database. Specifically, we integrate with the Wolfram Alpha Answers API to accomplish this. 

Finally, we test the user on the content presented. The participant chooses one category out of the three to test their knowledge. Once they have chosen their category, they will be asked a set of questions. The difficulty level for the questions has been categorized as beginner, intermediate, and advanced. Participants start with answering beginner-level questions but as they get questions right, they ascend to more difficult levels. However, if they get a question wrong, they descend to an easier level. This whole questioning round is based on a point-based system to give an incentive to the learner. Ultimately, we bridge the gap to financial literacy by incorporating the user’s original skill level and understanding of the concepts.

## Challenges we overcame
At first, we had difficulty fully integrating and incorporating the Short Answers API from Wolfram Alpha due to a CORS policy issue. At first, we tried creating different API keys, however, this did not solve the issue. To resolve the CORS policy issue, we had to query the API through a proxy server.

Another issue we had was over the structure of the questions. Originally, we were thinking about putting the questions and answers, as well as the user answers into a database, but we were worried about user privacy concerns we would not be able to account for in 12 hours. Therefore, we now use a dictionary with the key being the question itself and the value being a combination of the answer choices, correct answer, and difficulty level. This resolved the issue allowing it to be shown on the website.

## Tools/Frameworks
![](https://img.shields.io/badge/Framework-React-informational?style=flat&logo=React&logoColor=white&color=blue)
![](https://img.shields.io/badge/API-Wolfram-informational?style=flat&logo=Wolfram&logoColor=white&color=red)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=yellow)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&logoColor=white&color=orange)
![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=CSS3&logoColor=white&color=blue)
![](https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=github&logoColor=white&color=green)

## What's next for Finlitify?
We hope to bring more functionality to Finlitify which involves:
- Using machine learning algorithms and generating a personalized learning path based on the assessment results, maximizing the full potential of Computer Adaptive Testing (CAT), therefore, giving questions and challenges that specifically target their weaker areas, fostering continuous improvement.
- Providing detailed and personalized feedback after each question, explaining correct answers, and offering additional resources for further learning (maybe through an AI system or other means)
- Tracking their progress throughout their learning experience by having the users log in to save their progress.
- Have options for user-generated content to expand the financial content (or integrate the financial-related content from other online platforms).