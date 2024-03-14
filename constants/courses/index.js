
const ContentData = {
    "cpp" :[{
        title: "What is C++?",
        content:
`
# Introduction to C++
&nbsp;

---
&nbsp;

## Content
&nbsp;

C++ is a highly efficient, flexible, open-source programming language.

C++ includes features that allow more direct control over the system hardware, making it great for everything from creating operating systems to conducting advanced physics research! ⚛️

&nbsp;

Here's an example of C++ code where we find out how many pizzas two superheroes ate combined :

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
&nbsp;

---

&nbsp;

C++ is a powerful and versatile programming language that offers numerous benefits to developers. Whether you're a beginner programmer or an experienced developer, learning C++ can open up a wide range of opportunities and enhance your programming skills. Here are some compelling reasons to learn C++:

&nbsp;

### 1. Versatility

    C++ is a multiparadigm programming language, meaning it supports multiple programming styles, including procedural, object-oriented, and generic programming. This versatility allows developers to choose the most appropriate approach for solving different types of problems, making C++ suitable for a wide range of applications, from system programming to game development.

### 2. Performance

    C++ is known for its high performance and efficiency. It provides low-level access to system resources and hardware, allowing developers to write code that executes quickly and consumes minimal memory. This makes C++ an ideal choice for developing performance-critical applications, such as video games, real-time systems, and high-frequency trading systems.

### 3. Portability

    C++ code can be compiled to run on a wide variety of platforms and operating systems, including Windows, macOS, Linux, and embedded systems. This portability makes C++ suitable for cross-platform development, allowing developers to write code once and deploy it across multiple platforms without significant modifications.

### 4. Industry Demand

    C++ is widely used in industries such as gaming, finance, telecommunications, and embedded systems, where performance, reliability, and efficiency are paramount. As a result, there is a high demand for C++ developers in the job market, with opportunities for both entry-level and experienced professionals.

### 5. Foundation for Other Languages

    Learning C++ provides a solid foundation for understanding other programming languages, especially those that are derived from or influenced by C++, such as C#, Java, and Python. Many concepts and principles in C++ are transferable to other languages, making it easier to learn new languages and adapt to different programming paradigms.

`
    },
    {
        title: "How to get started with C++",
        content:
`
# How to get started with C++

&nbsp;

---

&nbsp;

### Install a Compiler

&nbsp;

To begin programming in C++, you'll need to set up your development environment. Start by choosing a suitable text editor or integrated development environment (IDE). Some popular options include Visual Studio Code, Code::Blocks, and Eclipse. Once you've selected your preferred editor or IDE, proceed to install a C++ compiler. Common choices include GCC (GNU Compiler Collection), Clang, and Microsoft Visual C++ Compiler. Ensure that you follow the installation instructions provided for your specific operating system.

&nbsp;

### Write your first program

&nbsp;

After setting up your development environment, you're ready to write your first C++ program. Open your chosen text editor or IDE and create a new source file with a ".cpp" extension. In this file, you'll write your C++ code. A traditional first program in C++ is the "Hello, World!" program. Here's a simple example:

&nbsp;

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

&nbsp;

---

&nbsp;

### Variables

&nbsp;

In C++ programming, a variable is a named storage location in computer memory that holds a value of a particular data type. Variables allow programmers to manipulate and store data during program execution, enabling them to perform calculations, make decisions, and interact with users.

&nbsp;

### Characteristics of Variables

&nbsp;

Variables in C++ possess the following characteristics:

&nbsp;

**Name**: Each variable has a unique identifier known as its name. Variable names must follow certain rules, such as starting with a letter or underscore and consisting of letters, digits, or underscores.

&nbsp;

**Data Type**: Every variable in C++ has a data type that specifies the type of data it can hold, such as integers, floating-point numbers, characters, or custom data types defined by the programmer.

&nbsp;

**Value**: Variables can hold different values depending on their data type. The value of a variable can be changed during program execution, allowing for dynamic data manipulation.

&nbsp;

**Memory Location**: Variables are stored in memory locations allocated by the compiler. The memory location of a variable is determined by its data type, scope, and storage class.

&nbsp;

### Declaring Variables

&nbsp;

In C++, variables must be declared before they can be used. The declaration specifies the variable's name and data type, allowing the compiler to allocate memory for the variable. Here's an example of variable declaration:

\`\`\`cpp
int age; // Declares a variable named 'age' of type 'int' (integer)
float temperature; // Declares a variable named 'temperature' of type 'float' (floating-point number)
char grade; // Declares a variable named 'grade' of type 'char' (character)
\`\`\`

### Example

Here's an example of a variable declaration in C++:

\`\`\`cpp
int x;
\`\`\`

`
    },
    {
        title: "Data Types",
        content:
`
# Data Types

&nbsp;

---

&nbsp;

Data types in C++ specify the type of data that a variable can hold and the operations that can be performed on that data. C++ provides a rich set of built-in data types to accommodate different types of data and optimize memory usage. Here are the commonly used data types in C++:

&nbsp;

## 1. Basic Data Types

&nbsp;

1. **Integer Types**: Integer types are used to store whole numbers without fractional parts. C++ provides several integer types, including \`int\`, \`short\`, \`long\`, and \`long long\`, with different storage sizes and ranges.

&nbsp;

2. **Floating-Point Types**: Floating-point types are used to store real numbers with fractional parts. C++ provides two floating-point types, \`float\` and \`double\`, for single-precision and double-precision floating-point numbers, respectively.

&nbsp;

3. **Character Type**: The \`char\` type is used to store individual characters, such as letters, digits, and special symbols. Characters are stored as ASCII values, which are integer representations of characters.

&nbsp;

4. **Boolean Type**: The \`bool\` type is used to represent Boolean values, i.e., true or false. It is commonly used for logical operations and conditional expressions.

&nbsp;

## 2. Derived Data Types

&nbsp;

1. **Array**: An array is a collection of elements of the same data type arranged in contiguous memory locations. Arrays allow for efficient storage and retrieval of multiple values using a single variable name.

&nbsp;

2. **Pointer**: A pointer is a variable that stores the memory address of another variable. Pointers are used to manipulate memory locations, access data indirectly, and optimize memory usage in C++ programs.

&nbsp;

## 3. User-Defined Data Types

&nbsp;

1. **Structure**: A structure is a composite data type that groups together variables of different data types under a single name. Structures allow for the creation of complex data structures to represent real-world entities.

&nbsp;

2. **Class**: A class is a blueprint for creating objects in C++, which are instances of the class. Classes encapsulate data and behavior into a single entity and support features such as inheritance, polymorphism, and encapsulation.

&nbsp;

## 4. Enumerated Data Type

&nbsp;

An enumerated data type, or enum, is a user-defined data type that consists of a set of named integer constants. Enums allow for the creation of symbolic names for integer values, improving code readability and maintainability.

&nbsp;

## Void Data Type

&nbsp;

The \`void\` data type represents the absence of a data type. It is used to indicate that a function does not return a value or that a pointer does not point to any specific data type.

&nbsp;

### Example

&nbsp;

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

&nbsp;

---

&nbsp;

Type modifiers in C++ are keywords that modify the behavior of basic data types by altering their storage size, sign representation, or other characteristics. These modifiers provide flexibility in customizing the behavior of variables and functions based on specific requirements. Here are the commonly used type modifiers in C++:

&nbsp;

## 1. Size Modifiers

&nbsp;

1. **short**: The \`short\` modifier is used to reduce the storage size of integer types, such as \`int\`. It typically reduces the size to half of the standard integer type, resulting in a smaller range of representable values.

&nbsp;

2. **long**: The \`long\` modifier is used to increase the storage size of integer types, such as \`int\`. It typically doubles the size of the standard integer type, allowing for a larger range of representable values.

&nbsp;

3. **long long**: The \`long long\` modifier is used to further increase the storage size of integer types beyond what \`long\` provides. It is typically used for integers requiring an even larger range of values.

&nbsp;

## 2. Sign Modifiers

&nbsp;

1. **signed**: The \`signed\` modifier is used to explicitly specify that a variable can hold both positive and negative values. It is the default sign representation for integer types in C++.

&nbsp;

2. **unsigned**: The \`unsigned\` modifier is used to specify that a variable can only hold non-negative values, i.e., zero or positive values. It extends the range of representable values by eliminating the sign bit.

&nbsp;

## 3. Type Qualifiers

&nbsp;

1. **const**: The \`const\` qualifier is used to declare constants, i.e., variables whose values cannot be changed once initialized. It ensures that the value of the variable remains constant throughout its lifetime.

&nbsp;

2. **volatile**: The \`volatile\` qualifier is used to indicate that a variable's value may change at any time without any action being taken by the program. It prevents the compiler from optimizing accesses to the variable.

&nbsp;

## Usage Examples

&nbsp;

Here are examples demonstrating the usage of type modifiers in C:

\`\`\`cpp
#include <iostream>

int main() {
    short int x; // Short integer variable
    long int y; // Long integer variable
    unsigned int z; // Unsigned integer variable
    signed char c; // Signed character variable
    const int MAX_SIZE = 100; // Constant variable
    volatile int count = 0; // Volatile variable

    return 0;
}
\`\`\`
`
    },
    {
        title: "Storage Classes",
        content:
`
# Storage Classes

&nbsp;

---

&nbsp;

Storage classes in C++ determine the lifetime, scope, and visibility of variables and functions within a program. They specify how and where memory is allocated for variables and control their accessibility. C++ provides several storage classes, each with its own characteristics and usage scenarios.

&nbsp;

## 1. auto

The \`auto\` storage class is the default storage class for local variables. Variables declared with the \`auto\` keyword are automatically allocated memory when the program enters the scope where they are defined. Their memory is released when the scope exits.

&nbsp;

## 2. static

The \`static\` storage class is used to declare variables that retain their values across function calls. Static variables are initialized only once at program startup and retain their values throughout the program's execution. They are stored in the data segment of memory and retain their values even after the function in which they are defined exits.

&nbsp;

## 3. extern

The \`extern\` storage class is used to declare variables and functions that are defined in other files or translation units. When a variable or function is declared as \`extern\`, the compiler knows that its definition is located elsewhere, and it should be linked at compile time.

&nbsp;

## 4. register

The \`register\` storage class is used to declare variables that should be stored in CPU registers for faster access. However, the \`register\` keyword is merely a suggestion to the compiler, and it may choose to ignore it. Modern compilers are capable of optimizing variable storage without explicit use of the \`register\` keyword.

&nbsp;

## 5. mutable

The \`mutable\` storage class is applicable only to non-static class members. It allows a member variable to be modified even within a \`const\` member function of the class. This is useful when a member variable needs to be updated for bookkeeping purposes but does not affect the logical constness of the object.

&nbsp;

## Usage Examples

&nbsp;

Here are examples demonstrating the usage of storage classes in C++:

\`\`\`cpp
#include <iostream>

void func() {
    static int count = 0; // Static variable retains its value across function calls
    auto int x = 10; // Local variable with automatic storage duration
    extern int y; // External variable declared in another file
    register int z = 20; // Variable stored in CPU register for faster access
    mutable int w = 30; // Mutable member variable within a const member function
}

int main() {
    func();
    return 0;
}
\`\`\`
`
    },
    {
        title: "What are Loops?",
        content:
`
# What are Loops?

&nbsp;

---

&nbsp;

Loops in C++ are used to execute a block of code repeatedly based on a specified condition. They provide a way to perform iterative tasks, such as processing elements of an array, reading input from a file, or implementing game logic. C++ supports three types of loops: the \`for\` loop, the \`while\` loop, and the \`do-while\` loop.

&nbsp;

## 1. for Loop

&nbsp;

The \`for\` loop is used to execute a block of code a specified number of times. It consists of three parts: the initialization, the condition, and the update. The loop continues to execute as long as the condition is true. Here's the general syntax of a \`for\` loop:

\`\`\`cpp
for (initialization; condition; update) {
    // Code to be executed
}
\`\`\`

## 2. while Loop

&nbsp;

The \`while\` loop is used to execute a block of code as long as a specified condition is true. The condition is evaluated before each iteration, and the loop continues to execute as long as the condition remains true. Here's the general syntax of a \`while\` loop:

\`\`\`cpp
while (condition) {
    // Code to be executed
}
\`\`\`

## 3. do-while Loop

&nbsp;

The \`do-while\` loop is similar to the \`while\` loop, but it guarantees that the block of code is executed at least once before the condition is evaluated. The condition is evaluated after each iteration, and the loop continues to execute as long as the condition remains true. Here's the general syntax of a \`do-while\` loop:

\`\`\`cpp
do {
    // Code to be executed
} while (condition);
\`\`\`
`},
    {
        title: "For Loop",
        content:
`
# For Loop

&nbsp;

---

&nbsp;

The \`for\` loop in C++ is used to execute a block of code a specified number of times. It provides a concise and structured way to perform iterative tasks, such as processing elements of an array, generating sequences, or implementing algorithms. The general syntax of a \`for\` loop is as follows:

\`\`\`cpp
for (initialization; condition; update) {
    // Code to be executed
}
\`\`\`

&nbsp;

The three parts of the \`for\` loop are as follows:

&nbsp;

1. **Initialization**: This part is executed only once before the loop begins. It is used to initialize the loop control variable or perform any necessary setup.

&nbsp;

2. **Condition**: This part is evaluated before each iteration of the loop. If the condition is true, the loop continues to execute; otherwise, the loop terminates.

&nbsp;

3. **Update**: This part is executed after each iteration of the loop. It is used to update the loop control variable or perform any necessary cleanup.

&nbsp;

### Example

&nbsp;

Here's an example of a simple \`for\` loop that prints the numbers from 1 to 5:

\`\`\`cpp
#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << i << " ";
    }

    return 0;
}
\`\`\`

In this example, the loop control variable \`i\` is initialized to 1, and the loop continues to execute as long as \`i\` is less than or equal to 5. After each iteration, the value of \`i\` is incremented by 1.

`
    },
    {
        title: "While Loop",
        content:

`
# While Loop

&nbsp;

---

&nbsp;

The \`while\` loop in C++ is used to execute a block of code as long as a specified condition is true. It provides a flexible and powerful way to perform iterative tasks, such as reading input from a file, processing data, or implementing game logic. The general syntax of a \`while\` loop is as follows:

\`\`\`cpp
while (condition) {
    // Code to be executed
}
\`\`\`

The loop continues to execute as long as the condition remains true. If the condition is false at the beginning, the code inside the loop will never be executed.

&nbsp;

### Example

&nbsp;

Here's an example of a simple \`while\` loop that prints the numbers from 1 to 5:

\`\`\`cpp
#include <iostream>

int main() {
    int i = 1;

    while (i <= 5) {
        std::cout << i << " ";
        i++;
    }

    return 0;
}
\`\`\`

In this example, the loop control variable \`i\` is initialized to 1, and the loop continues to execute as long as \`i\` is less than or equal to 5. After each iteration, the value of \`i\` is incremented by 1.

`
    },
    {
        title: "Do-While Loop",
        content:

`
# Do-While Loop

&nbsp;

---

&nbsp;

The \`do-while\` loop in C++ is similar to the \`while\` loop, but it guarantees that the block of code is executed at least once before the condition is evaluated. This can be useful when you want to ensure that a certain task is performed before checking the condition. The general syntax of a \`do-while\` loop is as follows:

\`\`\`cpp
do {
    // Code to be executed
} while (condition);
\`\`\`
The loop continues to execute as long as the condition remains true. If the condition is false at the beginning, the code inside the loop will still be executed at least once.

&nbsp;

### Example

&nbsp;

Here's an example of a simple \`do-while\` loop that prints the numbers from 1 to 5:

\`\`\`cpp
#include <iostream>

int main() {
    int i = 1;

    do {
        std::cout << i << " ";
        i++;
    } while (i <= 5);

    return 0;
}
\`\`\`

In this example, the loop control variable \`i\` is initialized to 1, and the loop continues to execute as long as \`i\` is less than or equal to 5. After each iteration, the value of \`i\` is incremented by 1.

`
    }

],
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