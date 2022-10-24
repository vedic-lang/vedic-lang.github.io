---
sort: 3
---
## 🌱 Hello World!

After you have learnt how to use the vedic cli tool, go to the directory where you want to make your first program

> we recommend to use [Vedic Syntax Highlighter extension](https://marketplace.visualstudio.com/items?itemName=vedic.vedic-syntax-highlighter) in VS Code. 

Now create a file `hello.ved` (it can be a different name) then add the following code there

```vedic
वद "हेलो विश्व!";
```

Here `वद` is an native function that will display out any value put into it, here it will output `हेलो विश्व!`.

Run it using the following commend

```bash
vedic hello.ved
```
or if your file is named anything else then use this

```bash
vedic [file name]
```

The output will be:

```bash
हेलो विश्व!
```

Congratulations, you have written and executed your first Vedic program.

if you want to check for errors and Execution time, you can add `--debug or -d` at the end above commend.

Now you can check out the [Chapters List](./chapters-list.md) for more advanced programs.