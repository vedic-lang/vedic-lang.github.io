---
sort: 3
---
## 🌱 Hello World!

Open the example in the browser IDE and press **Run**. The console should show `नमस्ते विश्व!` (“Hello, world!”). Change the greeting inside the quotes and press **Run** again to see your own message. [Open Hello World in the IDE](https://vedic-lang.github.io/vedic-ide/?example=hello-world.ved)

To run the same program on your computer, open a terminal in the directory where you want to save it.

> For VS Code, install [Vedic Code Highlighter](https://marketplace.visualstudio.com/items?itemName=vedic.vedic-syntax-highlighter) for syntax coloring. To format or run this example from the editor, install [Vedic Code Formatter](https://marketplace.visualstudio.com/items?itemName=vedic.vedic) and the Vedic CLI. You can use either extension on its own or install both.

Now create a file `hello.ved` (it can be a different name) then add the following code there

```vedic
वद("नमस्ते विश्व!");
```

Here `वद` is an native function that will display out any value put into it, here it will output `नमस्ते विश्व!`.

Run it using the following command

```bash
vedic hello.ved
```
or if your file is named anything else then use this

```bash
vedic [file name]
```

The output will be:
************
```bash
नमस्ते विश्व!
```

Congratulations, you have written and executed your first Vedic program.

Now you can check out the [Chapters List](./chapters-list.md) for more advanced programs.
