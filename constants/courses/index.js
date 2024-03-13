
const ContentData = {
    "cpp" :[{
        title: "What is C++?",
        content:
`
# Introduction to C++

---

## Content

C++ is a highly efficient, flexible, open-source programming language.

C++ includes features that allow more direct control over the system hardware, making it great for everything from creating operating systems to conducting advanced physics research! ⚛️

Here's an example of C++ code where we find out how many pizzas two superheroes ate combined:

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int batman = 3;
    int superman = 5;
    int totalPizzas = batman + superman;

    cout << "The total pizzas eaten by Batman and Superman is: " << totalPizzas << endl;
    return 0;
}
\`\`\`
    `
    },
    {
        title: "Why Learn C++?",
        content:
`
# Why Learn C++?

---

## Content

There are several reasons why learning **C++** can be beneficial:

### Control

**C++** provides a high degree of control over system resources, allowing for efficient programming.

### Community

**C++** has a large and active community, with numerous libraries and tools that extend its functionality.

### Career

**C++** skills are highly valued in many industries, including game development, real-time systems, and high-frequency trading.
`
    },
    {
        title: "How to get started with C++",
        content:
`
# How to get started with C++

---

## Content

### Install a Compiler

To get started with C++, you'll need a compiler. A compiler is a program that translates code written in one language into another language.

### Write your first program

Once you have a compiler installed, you can write your first C++ program. Here's an example of a simple "Hello, World!" program:

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
    }
\`\`\`
`
    },
    {
        title: "What are Variables?",
        content:
`
# What are Variables?

---

## Content

### Variables

A variable is a container for storing data values. It has a name and a data type.

### Example

Here's an example of a variable declaration in C++:

\`\`\`cpp
int x;
\`\`\`

In this example, we declare a variable named **x** of type **int** (integer).

### Initialization

You can also initialize a variable when you declare it:

\`\`\`cpp
int x = 5;
\`\`\`

In this example, we declare a variable named **x** of type **int** and initialize it with the value **5**.
`
    },
    {
        title: "Data Types",
        content:
`
# Data Types

---

## Content

### Data Types

C++ provides several data types, including int, char, float, and double.

### Example

Here's an example of a variable declaration using a data type:

\`\`\`cpp
int x;
char y;
float z;
double w;
\`\`\`

In this example, we declare variables **x**, **y**, **z**, and **w** of types **int**, **char**, **float**, and **double**, respectively.
`
    },
    {
        title: "Type Modifiers",
        content:
`
# Type Modifiers

---

## Content

### Type Modifiers

C++ provides several type modifiers, including signed, unsigned, short, and long.

### Example

Here's an example of a variable declaration using a type modifier:

\`\`\`cpp
unsigned int x;
short int y;
long int z;
\`\`\`

In this example, we declare variables **x**, **y**, and **z** of types **unsigned int**, **short int**, and **long int**, respectively.

`
    },
    {
        title: "Storage Classes",
        content:
`
# Storage Classes

---

## Content

### Storage Classes

C++ provides several storage classes, including auto, register, static, and extern.

### Example

Here's an example of a variable declaration using a storage class:

\`\`\`cpp

auto int x;
register int y;
static int z;
extern int w;
\`\`\`

In this example, we declare variables **x**, **y**, **z**, and **w** using the **auto**, **register**, **static**, and **extern** storage classes, respectively.

`
    }],
    "python" : [
        {
            title: "What is Python?",
            content:
`
<div class="content">
<h1>What is Python?</h1>
<p>Python is an interpreted, high-level and general-purpose programming language. It was created by Guido van Rossum and released in 1991.</p>
<p>Python's design philosophy emphasizes code readability with its notable use of significant whitespace.</p>
<p>Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</p>

<h2>Features of Python</h2>
<ul>
    <li>Easy-to-learn</li>
    <li>Easy-to-read</li>
    <li>Easy-to-maintain</li>
    <li>A broad standard library</li>
    <li>Interactive Mode</li>
    <li>Portable</li>
    <li>Extendable</li>
    <li>Databases</li>
    <li>GUI Programming</li>
    <li>Scalable</li>
</ul>
</div>
`
        },
        {
            title: "Python Syntax",
            content:
`
<div class="content">
    <h1>Python Syntax</h1>
    <p>Python was designed to be highly readable. It uses English keywords frequently where other languages use punctuation.</p>
    <p>Python is an interpreted language, which can save you considerable time during program development because no compilation and linking is necessary.</p>
    <p>Python is extensible: if you know how to program in C it is easy to add a new built-in function or module to the interpreter, either to perform critical operations at maximum speed, or to link Python programs to libraries that may only be available in binary form (such as a vendor-specific graphics library).</p>
</div>
`
        },
        {
            title: "Python Comments",
            content:
`
<div class="content">
    <h1>Python Comments</h1>
    <p>Comments can be used to explain Python code.</p>
    <p>Comments can be used to make the code more readable.</p>
    <p>Comments can be used to prevent execution when testing code.</p>
    <p>Single-line comments start with a hash symbol (#).</p>
    <p>Multi-line comments are possible with a multi-line string.</p>
</div>

`
        },
        {
            title: "Python Variables",
            content:
`
<div class="content">
    <h1>Python Variables</h1>
    <p>In Python, variables are containers for storing data values.</p>
    <p>Unlike other programming languages, Python has no command for declaring a variable.</p>
    <p>A variable is created the moment you first assign a value to it.</p>
</div>
`
        }
    ],
    "java" : [
        {
            title: "What is Java?",
            content:
`
# Introduction to Java

---

## Content

**Java** is a programming language that follows the *Object-oriented programming paradigm*[1] (also known as OOP).

It was first released in 1995 by Sun Microsystems, and has since grown to be one of the most used programming languages.

The fact that it's still one of the most-used languages over 25 years later shows how durable it is.

Java is a **secure[2], and portable language[3]**. We'll discuss what this means very soon!

### Example

Here's an example of a simple "Hello, World!" program in Java:

\`\`\`java

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
\`\`\`
`
        },
        {
            title: "Why Learn Java?",
            content:
`
# Why Learn Java?

---

## Content

There are several reasons why learning **Java** can be beneficial:

### Platform Independence

**Java** is platform-independent, meaning that it can run on any device that has a **Java Virtual Machine (JVM)** installed.

### Object-Oriented

**Java** is an object-oriented language, which means that it models real-world entities using objects.

### Community

**Java** has a large and active community, with numerous libraries and tools that extend its functionality.

### Career

**Java** skills are highly valued in many industries, including web development, Android app development, and enterprise software development.

`
        },
        {
            title: "How to get started with Java",
            content:
`

# How to get started with Java

---

## Content

### Install a Compiler

To get started with Java, you'll need a compiler. A compiler is a program that translates code written in one language into another language.

### Write your first program

Once you have a compiler installed, you can write your first Java program. Here's an example of a simple "Hello, World!" program:

\`\`\`java

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
\`\`\`
`
        }
    ],
    "javascript" : [
        {
            title: "What is JavaScript?",
            content:
`
# Introduction to JavaScript

---

## Content

**JavaScript** is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.

It's a high-level, interpreted programming language that conforms to the ECMAScript specification.

### Example

Here's an example of a simple "Hello, World!" program in JavaScript:

\`\`\`javascript
console.log("Hello, World!");
\`\`\`
`
        },
        {
            title: "Why Learn JavaScript?",
            content:
`
# Why Learn JavaScript?

---

## Content

There are several reasons why learning **JavaScript** can be beneficial:

### Versatility

**JavaScript** is a versatile language that can be used for both front-end and back-end development.

### Community

**JavaScript** has a large and active community, with numerous libraries and tools that extend its functionality.

### Career

**JavaScript** skills are highly valued in many industries, including web development, game development, and mobile app development.

`
        },
        {
            title: "How to get started with JavaScript",
            content:
`
# How to get started with JavaScript

---

## Content

### Install a Text Editor

To get started with JavaScript, you'll need a text editor. A text editor is a program that allows you to write and edit code.

### Write your first program

Once you have a text editor installed, you can write your first JavaScript program. Here's an example of a simple "Hello, World!" program:

\`\`\`javascript
console.log("Hello, World!");
\`\`\`
`
        }
    ],
    "c" : [
        {
            title: "What is C?",
            content:
`
# Introduction to C

---

## Features of C

- **Efficiency**: C is known for its high performance and efficiency, making it suitable for developing software that requires fast execution.
- **Portability**: C programs can be easily ported across different platforms and operating systems, making it a versatile choice for cross-platform development.
- **Flexibility**: C provides low-level access to system resources and hardware, allowing developers to write code that interacts directly with memory and devices.
- **Structured Programming**: C supports structured programming principles, allowing developers to organize their code into functions, modules, and libraries for better maintainability and readability.

## Applications of C

- **System Programming**: C is commonly used for developing operating systems, device drivers, and other system software due to its low-level capabilities.
- **Embedded Systems**: C is widely used in embedded systems programming for microcontrollers and other hardware devices where resource efficiency is critical.
- **Application Development**: Many software applications, including compilers, databases, and graphics software, are written in C or use components written in C for performance-critical tasks.

## Learning C

Learning C is a valuable skill for aspiring programmers and software developers. There are numerous resources available, including books, online tutorials, and courses, to help beginners get started with C programming.

### Example

Here's an example of a simple "Hello, World!" program in C:

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
\`\`\`
`
        },
        {
            title: "Why Learn C?",
            content:
`
# Why Learn C?

---

## Content

There are several reasons why learning **C** can be beneficial:

### Efficiency

**C** is a highly efficient language, making it great for everything from creating operating systems to conducting advanced physics research.

### Community

**C** has a large and active community, with numerous libraries and tools that extend its functionality.

### Career

**C** skills are highly valued in many industries, including game development, real-time systems, and high-frequency trading.

`
        },
        {
            title: "How to get started with C",
            content:
`
# How to get started with C

---

## Content

### Install a Compiler

To get started with C, you'll need a compiler. A compiler is a program that translates code written in one language into another language.

### Write your first program

Once you have a compiler installed, you can write your first C program. Here's an example of a simple "Hello, World!" program:

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
\`\`\`
`
        }
    ]
}


export default ContentData