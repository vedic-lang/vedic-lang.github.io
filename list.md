---
sort: 7
---
## सूचि (list)

>_transliteration: sUchi, meaning: List_

सूचि is a bulit in data type of vedic, which can store a ordered set of values of different types. सूचि can be multidimensional.

### Creating an सूचि

here is the easiest way to create a Vedic `सूचि`.

**Example:**
```ved
# This will declare a simple सूचि 
मान क = [["आम",१ ],["संतरा",२],["सेब",३]];
वद क;
```

**Output:**

```bash
[ [ 'आम', '१' ], [ 'संतरा', '२' ], [ 'सेब', '३' ] 
```

### Adding elements to a सूचि

You can also create an `सूचि`, and then add the elements:

**Example:**

```ved
मान सप्तर्षि = []; # रिक्त सूचि - Empty list

मान सप्तर्षि[]= "Kashyapa";
मान सप्तर्षि[]= "Atri";
मान सप्तर्षि[]= "Vasistha";
मान सप्तर्षि[]= "Vishwamitra";
मान सप्तर्षि[]= "Bharadvaja";
मान सप्तर्षि[]= "Gautama";
मान सप्तर्षि[]= "Jamadagni";

वद सप्तर्षि;
```

**Output:**

```bash
['Kashyapa','Atri','Vasistha','Vishwamitra','Bharadvaja','Gautama','Jamadagni'] 
```

### Native functions of सूचि

**कुल**

>_transliteration: kul, meaning: total-count_

`कुल` is Native functions in vedic which is used to count size of a `सूचि`

**Example:**

```ved
वद कुल(सप्तर्षि);
```

**Output:**

```bash
७
```