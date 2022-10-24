---
sort: 9
---
## निर्देश (switch)

>_transliteration: nirdesa, meaning: instruction_

The `निर्देश` is a conditional statement like `यदि` statement. `निर्देश` is useful when you want to execute one of the multiple code blocks based on the return value of a specified expression.

### Keywords

- **निर्देश** - `switch`
- **यद** - `case`
- **यदभावे** - `default`

**Example:**

```ved
मान अ = ३;

निर्देश (अ) {
    यद १:
        वद 'निर्देश १ अनुष्ठित'; # case 1 executed
    यद २:
        वद 'निर्देश २ अनुष्ठित'; 
    यद ३:
        वद 'निर्देश ३ अनुष्ठित'; 
    यदभावे:
        वद 'यदभावे औत्सर्गिक निर्देश अनुष्ठित'; # In the absence of incident default case executed
}
```
**output**

```bash
निर्देश ३ अनुष्ठित
```