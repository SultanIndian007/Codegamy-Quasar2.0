'use client'
import React, { useState } from 'react';

const interviewQuestions = {
  c: [
    { question: 'Explain pointers in C.', solution: 'Pointers are variables that store memory addresses of other variables.' },
    { question: 'What are the different data types in C?', solution: 'C offers basic data types like int, float, char, etc.' },
    { question: 'What is the difference between malloc() and calloc() in C?', solution: 'malloc() is used to allocate memory blocks of a specified size, while calloc() is used to allocate and initialize memory blocks of a specified size.' },
    { question: 'Explain the concept of recursion in C.', solution: 'Recursion is a programming technique where a function calls itself to solve a problem.' },
    { question: 'What is the difference between a structure and a union in C?', solution: 'A structure is a collection of different data types, while a union is a special data type that can hold different types of data at different times.' },
    { question: 'What is the difference between a local variable and a global variable in C?', solution: 'A local variable is declared inside a function and is only accessible within that function, while a global variable is declared outside of any function and can be accessed by any function in the program.' },
    { question: 'Explain the concept of file handling in C.', solution: 'File handling in C involves reading from and writing to files on the computer\'s storage system.' },
    { question: 'What is the difference between a character array and a string in C?', solution: 'A character array is a collection of characters, while a string is a sequence of characters terminated by a null character.' },
    { question: 'What is the difference between break and continue statements in C?', solution: 'The break statement is used to exit a loop or switch statement, while the continue statement is used to skip the current iteration of a loop and move to the next iteration.' },
    { question: 'Explain the concept of static variables in C.', solution: 'Static variables are variables that retain their values between function calls and are only initialized once.' }
  ],
  cpp: [
    { question: 'Differentiate between pass-by-value and pass-by-reference in C++.', solution: 'Pass-by-value copies the value, while pass-by-reference passes the memory address.' },
    { question: 'Explain virtual functions and polymorphism in C++.', solution: 'Virtual functions allow for dynamic dispatch based on object type at runtime (polymorphism).' },
    { question: 'What is the difference between a class and an object in C++?', solution: 'A class is a blueprint for creating objects, while an object is an instance of a class.' },
    { question: 'Explain the concept of constructor and destructor in C++.', solution: 'A constructor is a special member function that is called when an object is created, while a destructor is called when an object is destroyed.' },
    { question: 'What is the difference between public, private, and protected access specifiers in C++?', solution: 'Public members are accessible from anywhere, private members are only accessible within the class, and protected members are accessible within the class and its derived classes.' },
    { question: 'What is function overloading in C++?', solution: 'Function overloading is the ability to define multiple functions with the same name but different parameters.' },
    { question: 'Explain the concept of inheritance in C++.', solution: 'Inheritance is a mechanism in which one class inherits the properties and behaviors of another class.' },
    { question: 'What is the difference between composition and inheritance in C++?', solution: 'Composition is a "has-a" relationship between classes, while inheritance is an "is-a" relationship between classes.' },
    { question: 'What is a virtual destructor in C++?', solution: 'A virtual destructor is used to ensure that the destructor of the derived class is called when deleting an object through a pointer to the base class.' },
    { question: 'What is the difference between function overriding and function overloading in C++?', solution: 'Function overriding occurs when a derived class defines a function with the same name and signature as a function in the base class, while function overloading occurs when multiple functions with the same name but different parameters are defined.' }
  ],
  python: [
    {
      question: "What is Python? What are the benefits of using Python?",
      solution:
        "Python is a high-level, interpreted, general-purpose programming language. Here are some benefits of using Python: \n  - Simple and easy-to-learn syntax \n  - Supports object-oriented programming \n  - Extensive libraries and frameworks \n  - Large and active community \n  - Free and open-source",
    },
    {
      question: "What is a dynamically typed language?",
      solution:
        "Python is a dynamically typed language. This means type checking happens during execution, unlike statically typed languages where it happens before. This allows for flexibility but can sometimes lead to runtime errors if data types are not as expected.",
    },
    {
      question: "What is an Interpreted language?",
      solution:
        "Python is an interpreted language. This means the code is executed line by line by an interpreter, unlike compiled languages where the entire code is converted into machine code first.",
    },
    {
      question: "What is PEP 8 and why is it important?",
      solution:
        "PEP 8 stands for Python Enhancement Proposal 8. It's a style guide that defines coding conventions for Python to improve readability and maintainability. Following PEP 8 is considered good practice in the Python community.",
    },
    {
      question: "What is Scope in Python?",
      solution:
        "Scope in Python defines the accessibility of variables and objects within different parts of your code. A scope is a block of code where an object in Python remains relevant. Namespaces uniquely identify all the objects inside a program. However, these namespaces also have a scope defined for them where you could use their objects without any prefix.\n\nThere are different types of scopes like local, global, module-level, and outermost scope. Understanding scope is important for writing well-structured and maintainable Python code.",
    },
    {
      question: "What are lists and tuples? What is the key difference between the two?",
      solution:
        "Lists and tuples are both sequence data types that can store a collection of objects in Python. The objects stored in both sequences can have different data types. Lists are represented with square brackets `[]`, while tuples are represented with parentheses `()`. However, the key difference is that lists are mutable (can be modified), while tuples are immutable (cannot be modified).",
    },
    {
      question: "What is docstring in Python?",
      solution:
        "Documentation string or docstring is a multiline string used to document a specific code segment. The docstring should describe what the function or method does.",
    },
    {
      question: "What is the `pass` statement in Python?",
      solution:
        "The `pass` statement is a null operation in Python. It's used as a placeholder within code blocks that need to exist syntactically but don't currently have any functionality. It prevents errors during execution when empty blocks are required.",
    },
    {
      question: "Explain how can you make a Python Script executable on Unix?",
      solution:
        "Script file must begin with #!/usr/bin/env python",
    },
    {
      question: "What is PYTHONPATH in Python?",
      solution:
        "PYTHONPATH is an environment variable which you can set to add additional directories where Python will look for modules and packages. This is especially useful in maintaining Python libraries that you do not wish to install in the global default location.        ",
    },
  ],

  java: [
    { question: 'Explain the difference between primitive data types and reference types in Java.', solution: 'Primitive data types hold actual values, while reference types store memory addresses of objects.' },
    { question: 'What are the four pillars of object-oriented programming (OOP)?', solution: 'Encapsulation, Inheritance, Polymorphism, and Abstraction.' },
    { question: 'What is the difference between checked and unchecked exceptions in Java?', solution: 'Checked exceptions are checked at compile-time and must be handled or declared, while unchecked exceptions are not checked at compile-time and do not require handling or declaration.' },
    { question: 'Explain the concept of method overloading in Java.', solution: 'Method overloading allows multiple methods with the same name but different parameters in a class.' },
    { question: 'What is the difference between equals() and == in Java?', solution: 'The equals() method is used to compare the content of objects for equality, while the == operator is used to compare the references of objects.' },
    { question: 'What is the difference between final, finally, and finalize in Java?', solution: 'final is a keyword used to restrict the modification of variables, methods, and classes. finally is a block used to execute code after a try-catch block, regardless of whether an exception is thrown or not. finalize is a method called by the garbage collector before reclaiming the memory occupied by an object.' },
    { question: 'Explain the concept of method overriding in Java.', solution: 'Method overriding occurs when a subclass defines a method with the same name and signature as a method in its superclass, allowing the subclass to provide its own implementation of the method.' },
    { question: 'What is the difference between abstract classes and interfaces in Java?', solution: 'Abstract classes can have both abstract and non-abstract methods, while interfaces can only have abstract methods. A class can implement multiple interfaces, but can only extend one abstract class.' },
    { question: 'What is the difference between static and non-static methods in Java?', solution: 'Static methods belong to the class itself and can be called without creating an instance of the class, while non-static methods belong to individual objects and can only be called on instances of the class.' },
    { question: 'Explain the concept of exception handling in Java.', solution: 'Exception handling is a mechanism to handle runtime errors and abnormal conditions in a program. It involves catching and handling exceptions using try-catch blocks.' }
  ],

  javascript: [
    { question: 'How does event loop work in JavaScript?', solution: 'The event loop continuously checks for events in the queue and executes them.' },
    { question: 'What are the different ways to declare variables in JavaScript?', solution: 'You can use var, let, and const keywords for variable declaration.' },
    { question: 'What is the difference between == and === in JavaScript?', solution: 'The == operator compares the values of two variables, performing type coercion if necessary, while the === operator compares both the values and the types of the variables.' },
    { question: 'What is hoisting in JavaScript?', solution: 'Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.' },
    { question: 'What is the difference between let, const, and var in JavaScript?', solution: 'let and const are block-scoped variables that were introduced in ES6, while var is function-scoped. let allows reassignment, const does not allow reassignment, and var allows reassignment and hoisting.' },
    { question: 'What is the difference between null and undefined in JavaScript?', solution: 'null is an assignment value that represents no value or an empty value, while undefined is a variable that has been declared but has not been assigned a value.' },
    { question: 'What is the difference between synchronous and asynchronous programming in JavaScript?', solution: 'Synchronous programming executes code sequentially, blocking further execution until a task is completed, while asynchronous programming allows multiple tasks to be executed concurrently, without blocking the execution of other tasks.' },
    { question: 'What is the purpose of the "use strict" directive in JavaScript?', solution: 'The "use strict" directive enables strict mode, which enforces stricter rules for JavaScript code, catches common mistakes, and prevents the use of certain error-prone features.' },
    { question: 'What is a closure in JavaScript?', solution: 'A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows variables to be preserved even after the outer function has finished executing.' },
    { question: 'What are the different ways to create objects in JavaScript?', solution: 'You can create objects using object literals, constructor functions, the Object.create() method, and ES6 classes.' }
  ],
};

const InterviewPage = () => {
  const [language, setLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const renderQuestions = () => {
    if (language && interviewQuestions[language]) {
      return interviewQuestions[language].map((question, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 my-4">
          <h3 className="text-lg font-bold">Question {index + 1}</h3>
          <p className="text-gray-700 mb-2">{question.question}</p>
          <h3 className="text-lg font-bold">Solution</h3>
          <p className="text-gray-700">{question.solution}</p>
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Top Interview Questions</h1>
      <label htmlFor="language" className="block mb-4">
        Choose a language:
      </label>
      <select
        id="language"
        value={language}
        onChange={handleLanguageChange}
        className="border border-gray-300 rounded px-4 py-2 mb-8"
      >
        <option value="">Select Language</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
      </select>
      {renderQuestions()}
    </div>
  );
};

export default InterviewPage;