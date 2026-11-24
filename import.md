---
sort: 14
---
## आवाहन (import)

Use `आवाहन` (ITRANS `AvAhana`, “invocation”) to load another Vedic source file. Put the path in double quotes and end the statement with a semicolon. Relative paths start in the directory of the file containing the import.

### Example

Save these two files in the same directory.

**simpleinterest.ved**

```vedic
सूत्र मिश्रधन(म, द, स) {
    फल म + (म * द * स / १००);
}
```

**main.ved**

```vedic
आवाहन "./simpleinterest.ved";

मान मूलधन = १०००;
मान दर = ८;
मान समय = ५;
वद("मिश्रधन =", मिश्रधन(मूलधन, दर, समय));
```

Run `vedic main.ved` with Vedic 3.0 or later. The online IDE currently runs single-file programs.

```text
मिश्रधन = १४००
```
