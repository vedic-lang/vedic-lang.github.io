---
sort: 12
---
## मूल सूत्र (MoolSutra)

>_transliteration: MoolSutra, meaning: Native functions_

मूल सूत्र (MoolSutra) are the core native functions of Vedic.
Here we will learn how to utilize them in your programs.

### 1. कुल (kul)

>_transliteration: kul, meaning: count_

The `कुल` function in Vedic is used to count the size of a given data type. It is a fundamental native function that helps in determining the number of elements or the length of a data structure. To use the `कुल` function, you need to pass the data type or structure as an argument, and it will return the count or size value.

**सूचि (list) Example:**
```ved
मान mySuchi = [1, 2, 3, 4, 5];
मान count = कुल(mySuchi);
वद("The count is:",count);
```

**Output:**
```bash
The count is:  ६
```

> In the above example, we have an array `myArray`, and we use the `कुल` function to determine its size. The result is then printed using the `वद` function.

**वाक्य (string) Example:**
```ved
मान myString = "QWERTY";
मान count = कुल(myString);
वद("The count is:",count);
```

**Output:**

```bash
The count is:  ५
```

> In the above example, we have an string `myString`, and we use the `कुल` function to determine its length. The result is then printed using the `वद` function.


### 2. अंक (ank)

>_transliteration: ank, meaning: to convert a string to a number_

The `अंक` function in Vedic is used to convert a string representation of a number into its numerical equivalent. It is helpful when you need to perform mathematical operations or comparisons on user input, which is typically in string format. To use the `अंक` function, simply pass the string as an argument, and it will return the corresponding number.

**Example:**
```ved
मान numString = "42";
मान number = अंक(numString);
वद("The converted number is:", number);
```

**Output:**
```bash
The converted number is: ४२
```

> In the above example, we have a string `numString` containing the number "42" The `अंक` function converts it into the numerical value `42`, which is then printed using the `वद` function.

### 3. लभ्यते (labhyate)

>_transliteration: labhyate, meaning: to check if the second string is a substring of the first string_

The `लभ्यते` function in Vedic is used to check whether the second string is a substring of the first string. It returns a Boolean value (`true` or `false`) indicating the result of the substring check. To use the `लभ्यते` function, provide the two strings as arguments, and it will return `true` if the second string is found within the first string.

**Example:**
```ved
मान mainString = "Hello, World!";
मान substring = "World";
मान isSubstring = लभ्यते(mainString, substring);
वद("Is it a substring? =>",isSubstring);
```

**Output:**
```bash
Is it a substring? => सत्य
```

> In the above example, we have a main string `mainString` and a substring `substring`. The `लभ्यते` function checks whether `substring` is present within `mainString` and returns `true`. The result is then printed using the `वद` function.

### 4. निर्गम (nirgam)

>_transliteration: nirgam, meaning: exit_

The `निर्गम` function in Vedic is used to exit the program with a given exit code. It allows you to terminate the program execution gracefully when certain conditions are met. To use the `निर्गम` function, provide the exit code as an argument, and the program will terminate with that exit code.

**Example:**
```ved
निर्गम(०); # Exit Function
```

> In the above example, the `निर्गम` function is called with the exit code `०`. This will cause the program to terminate immediately with an exit code of `0`.

### 5. पठन (pathana)

>_transliteration: pathana, meaning: read_

The `पठन` function in Vedic is used to read a line from the standard input (stdin). It allows you to accept user input during program execution. To use the `पठन` function, simply call it, and it will wait for user input. The entered line is then returned as a string.

**Example:**
```ved
वद("Enter your name:");
मान name = पठन(); 
वद("Hello, ",name);
```

**Output:**
```bash
Hello, Prashant
```

> In the above example, the `पठन` function is used to read the user's name from the standard input. The entered name is then printed with a greeting message using the `वद` function.

### 6. प्रकार (prakaar)

>_transliteration: prakaar, meaning: type_

The `प्रकार` function in Vedic is used to determine the type of a given value. It returns a string representing the type, which can be useful for debugging and validation purposes. The possible types it can return include `अंक` (number), `वाक्य` (string), `तर्क` (boolean), and others.

**Example:**
```ved
वद(प्रकार(सत्य)); # expect: तर्क
वद(प्रकार(१.०)); # expect: अंक
वद(प्रकार(१.०*१.०)); # expect: अंक
वद(प्रकार(१) == "अंक"); # expect: सत्य
वद(प्रकार("some random string")); # expect: वाक्य
```

### 7. समय (samay)

>_transliteration: samay, meaning: time_

The `समय` function in Vedic returns the current time in milliseconds. It is useful for measuring time intervals, logging, and other time-related operations.

**Example:**
```ved
वद(समय()); # current time in milliseconds
```

### 8. शब्द (shabd)

>_transliteration: shabd, meaning: word_

The `शब्द` function in Vedic is used to convert a given value into a string. This can be helpful when you need to ensure a value is in string format, such as for concatenation or display purposes.

**Example:**
```ved
मान a = १२३;
वद(प्रकार(a)); # expect: अंक

# convert to string
a = शब्द(a); 
वद(प्रकार(a)); # expect: वाक्य
```

### 9. त्रुटि (truti)

>_transliteration: truti, meaning: error_

The `त्रुटि` function in Vedic is used to throw a runtime error with a custom message. It allows you to handle exceptional conditions gracefully by providing descriptive error messages.

**Example:**
```ved
त्रुटि("Custome error message"); # this will throw a custom runtime error with the message "Custome error message"
```

**Output:**
```bash
# अनुष्ठान-काले-दोषः :
# File "tests/mool/truti.ved", line 1, column 32
# दोषः : त्रुटि : Custome error message
```

### 10. वद (vad)

>_transliteration: vad, meaning: speak/print_

The `वद` function in Vedic is used to print the given strings or values to the standard output. It is similar to the `print` function in other programming languages and is essential for displaying messages and debugging information.

**Example:**
```ved
वद("Hello world"); # expect: Hello world
वद("Hello world", "Hello world"); # expect: Hello world Hello world
```

By understanding and utilizing these native functions of Vedic, you can start building powerful and culturally inspired programs. Experiment with the language and explore its unique features to unlock its full potential. Happy coding with Vedic!