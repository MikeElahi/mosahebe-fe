<template>
    <Head>
        <Title>Mosahebe</Title>
    </Head>
    <UContainer class="w-full md:w-1/2">
        <div v-for="qa in questions_answers">
            <QA :question="qa.question" :answer="qa.answer" :difficulty="qa.difficulty" />
        </div>
    </UContainer>
</template>
<script>
    export default {
        data() {
            return {
                questions_answers: [
                    {
                        "question": "What is the difference between a language construct and a “built-in” function in PHP?",
                        "answer": "A language construct is a predefined code block that is built into the PHP engine, whereas a built-in function is a code block that is defined in PHP but built into the PHP core at compile time.",
                        "difficulty": "Junior",
                    },
                    {
                        "question": "How many bits are in a byte?",
                        "answer": "There are 8 bits in a byte. A bit is a binary digit, taking a value of either 0 or 1. A byte is a sequence of bits; usually eight bits equal one byte. Bytes are a unit of digital information that most commonly consists of eight bits.",
                        "difficulty": "Beginner",
                    },
                    {
                        "question": "What is the difference between a static and a non-static class?",
                        "answer": "A static class cannot be instantiated (i.e., you cannot create new instances of a static class) and all of its members are static by default. A non-static class can be instantiated (i.e., you can create new instances of a non-static class) and its members are non-static by default.",
                        "difficulty": "Intermediate",
                    },
                    {
                        "question": "How do you center an element in CSS?",
                        "answer": "To center an element horizontally, use margin: auto; To center an element vertically, use position: relative; top: 50%; and transform: translateY(-50%);",
                        "difficulty": "Senior",
                    },
                    {
      "question": "What is the difference between a language construct and a 'built-in' function in PHP?",
      "answer": "A language construct is a predefined code block that is built into the PHP engine, whereas a built-in function is a code block that is defined in PHP but built into the PHP core at compile time.",
      "difficulty": "Junior"
    },
    {
      "question": "How many bits are in a byte?",
      "answer": "There are 8 bits in a byte. A bit is a binary digit, taking a value of either 0 or 1. A byte is a sequence of bits; usually eight bits equal one byte. Bytes are a unit of digital information that most commonly consists of eight bits.",
      "difficulty": "Beginner"
    },
    {
      "question": "What is the difference between a static and a non-static class?",
      "answer": "A static class cannot be instantiated (i.e., you cannot create new instances of a static class) and all of its members are static by default. A non-static class can be instantiated (i.e., you can create new instances of a non-static class) and its members are non-static by default.",
      "difficulty": "Intermediate"
    },
    {
      "question": "What is the purpose of an abstract class in Java?",
      "answer": "An abstract class in Java is a class that cannot be instantiated and is typically used as a base class for other classes. It allows you to define methods that must be implemented by any concrete subclass while also allowing you to provide some common method implementations.",
      "difficulty": "Intermediate"
    },
    {
      "question": "Explain the concept of polymorphism in object-oriented programming.",
      "answer": "Polymorphism in object-oriented programming allows objects of different classes to be treated as objects of a common superclass. It enables flexibility and reusability in code by invoking methods on objects without knowing their specific class type, as long as they are derived from a common base class.",
      "difficulty": "Intermediate"
    },
    {
      "question": "What is the purpose of the 'finally' block in a try-catch-finally statement in programming?",
      "answer": "The 'finally' block in a try-catch-finally statement is used to specify code that must be executed, regardless of whether an exception is thrown or not. It's often used for resource cleanup or to ensure that certain actions are taken, such as closing files or releasing resources, even if an exception occurs in the 'try' block.",
      "difficulty": "Intermediate"
    }
                ]
            }
        }
    }
</script>