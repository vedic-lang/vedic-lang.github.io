---
sort: 8
---
## यदि-अथ (if-else)

>_transliteration: yadi, meaning: if_

>_transliteration: atha, meaning: else_

Like many programming languages, vedic also has 

- **यदि** - `if`
- **अथ** - `else`
- **अथ यदि** - `else if` 

expressions for conditional control flow.

```ved
मान आयु = ३२;
यदि (आयु == २५) {
  वद("वयं सम वयस्काः एव"); # We're the same age
}
अथ यदि (आयु > २५) {
  वद("वयं सम वयस्काः न एव"); # We're not the same age
}
अथ {
  वद("मम अपेक्षया कनिष्ठः वा"); # Younger to me
}
```
**output**

```bash
वयं सम वयस्काः न एव
```

> Note : The statements in the `यदि-अथ` must be enclosed by curly brackets (`{` and `}`) they are not optional. Multiple statements can be used inside the branches. 