---
sort: 3
---

# Vedic language reference

This page describes the syntax and behavior implemented by the Vedic interpreter. Examples use Devanagari keywords and digits. Identifiers may also use other alphabetic Unicode characters or `_`, so Latin names work too.

## A first program

Save this as `hello.ved` and run it with `vedic hello.ved`:

```vedic
मान नाम = "विश्व";
वद("नमस्ते, " + नाम + "!");
```

`मान` declares a variable, `वद` writes values to standard output, and `;` ends each statement.

## Source text

- `#` starts a comment that continues to the end of the line.
- Statements end with `;`. This is required for variable declarations, expressions, `फल`, `विराम`, and `अग्रिम` statements.
- Blocks use `{` and `}`. Whitespace and line breaks separate tokens but do not end statements.
- Strings use single or double quotes. Escape sequences are not currently interpreted.
- Numbers can use ASCII digits (`0`–`9`) or Devanagari digits (`०`–`९`), with `.` for a decimal point. Devanagari digits are displayed when numbers are printed.
- Names are case-sensitive. Identifiers can include alphabetic Unicode characters, Devanagari characters, `_`, and digits after the first character. A reserved keyword cannot be used as a name.

## Keywords

| Keyword | Meaning |
|---|---|
| `मान` | Declare a variable |
| `सत्य`, `असत्य`, `न` | True, false, and null values |
| `यदि`, `अथ` | If and else |
| `चक्र`, `पर्यन्त` | For and while loops |
| `विराम`, `अग्रिम` | Break and continue the current loop |
| `सूत्र`, `फल` | Declare a function and return a value |
| `विधि`, `सन्धि`, `मम`, `मित्र` | Class, inheritance, current instance, and parent instance |
| `आवाहन` | Import a source file |
| `निर्देश` | Reserved for switch-like syntax; no switch statement is currently implemented |

## Values and variables

Vedic is dynamically typed. Its runtime supports numbers, strings, booleans, null, lists, functions, classes, and instances. Variables can be reassigned, and a declaration without an initializer starts with `न`.

```vedic
मान आयु = २५;
मान नाम = "सीता";
मान सक्रिय = सत्य;
मान उत्तर;

आयु = आयु + १;
वद(आयु);    # २६
वद(उत्तर);  # न
```

Declarations and assignments are separate forms: `मान आयु = २५;` declares; `आयु = २६;` updates.

## Operators

| Operators | Operation |
|---|---|
| `=` | Assignment |
| `||` | Logical OR |
| `&&` | Logical AND |
| `==`, `!=` | Equality and inequality |
| `<`, `<=`, `>`, `>=` | Comparisons |
| `+`, `-` | Addition and subtraction; `+` also joins strings |
| `*`, `/`, `%` | Multiplication, division, remainder |
| `!`, unary `-` | Logical NOT, numeric negation |
| `()` | Grouping and function calls |
| `.`, `[]` | Property/method access and list indexing |

From lowest to highest precedence: assignment, `||`, `&&`, equality, comparisons, addition/subtraction, multiplication/division/remainder, unary operators, then calls, property access, and indexing. Use parentheses to make an expression’s grouping clear.

```vedic
वद(२ + ३ * ४);       # १४
वद((२ + ३) * ४);     # २०
वद("नमस्ते " + "विश्व");
```

Logical conditions use truthiness: `असत्य`, `न`, zero, the empty string, and the empty list are false; other values are true.

## Conditions

```vedic
मान अंक = ७;
यदि (अंक > ५) {
  वद("बड़ा");
} अथ {
  वद("छोटा या बराबर");
}
```

The body can be one statement or a braced block. `अथ यदि (...)` chains another condition.

## Loops

`पर्यन्त` repeats while its condition is true:

```vedic
मान गिनती = ०;
पर्यन्त (गिनती < ३) {
  वद(गिनती);
  गिनती = गिनती + १;
}
```

`चक्र` has initializer, condition, and increment clauses. Any clause can be empty:

```vedic
चक्र (मान i = ०; i < ३; i = i + १) {
  वद(i);
}
```

Use `विराम;` to leave a loop and `अग्रिम;` to continue with its next iteration.

## Functions

Declare functions with `सूत्र`, parameters in parentheses, and a braced body. `फल` returns a value; without it the function returns `न`.

```vedic
सूत्र योग(पहला, दूसरा) {
  फल पहला + दूसरा;
}

वद(योग(२, ३)); # ५
```

## Lists

Lists can hold values of different types. Use square brackets to create and index a list. Indexes start at zero.

```vedic
मान रंग = ["लाल", "नीला"];
वद(रंग[०]); # लाल
रंग[१] = "हरा";
वद(रंग); # [लाल, हरा]
```

List methods and native functions are documented in [Lists](./list.md) and [Native functions](./native_functions.md).

## Classes

`विधि` declares a class. Methods are declared directly in its body. `मम` refers to the current instance; a class can inherit from another with `सन्धि`, and `मित्र` accesses the parent implementation.

```vedic
विधि अभिवादन {
  बोलो(नाम) {
    वद("नमस्ते, " + नाम);
  }
}

मान संदेश = अभिवादन();
संदेश.बोलो("सीता");
```

See [Classes](./class.md) for inheritance examples.

## Imports and built-in functions

In Vedic 3.0, `आवाहन` loads a `.ved` file relative to the importing file. When upgrading from 2.x, change each `अवहन` import statement to `आवाहन`.

```vedic
आवाहन "./सहायक.ved";
```

Common built-ins include `वद(...)` for output, `पठन()` for input, `कुल(value)` for a list or string length, and `प्रकार(value)` for a type name. The full list is on the [Native functions](./native_functions.md) page.

## Formatting and running programs

The CLI can format one Vedic source file in place or recursively format supported source files under a directory:

```bash
vedic format path/to/file.ved
vedic format path/to/examples
```

In VS Code, [Vedic Code Formatter](https://marketplace.visualstudio.com/items?itemName=vedic.vedic) provides **Format** and **Run** buttons for an open Vedic file. Formatting uses the Vedic CLI, so install it first and set the `vedic.executable` setting if the command is not named `vedic` or is not on `PATH`.

### Script exit codes

When you run `vedic file.ved`, your shell receives an exit code. In a shell script, `vedic file.ved && echo "Finished"` prints the message only when Vedic exits successfully.

| Code | Meaning |
| --- | --- |
| `0` | The program finished successfully. |
| `64` | The CLI received an unknown option or an unsupported file extension. |
| `65` | The source failed to compile. |
| `66` | The CLI could not read the source file. Check the path, permissions, and UTF-8 encoding. |
| `70` | The interpreter encountered a runtime error. |

The `64` and `66` cases above apply to the development CLI. Version 2.1.0 prints a diagnostic and returns `0` for those cases. A program can also set its own exit code with `निर्गम`.

## Current limits

The current implementation does not provide static type declarations, string escape processing, or a `निर्देश` switch statement. This reference covers the language features currently implemented in the interpreter; future versions may extend them.
