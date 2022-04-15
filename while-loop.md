---
sort: 11
---
## पर्यन्तम् (while loop)

>_transliteration: chakram, meaning: round-loop_

VedicScript includes `पर्यन्तम्` loop to execute code repeatedly till it satisfies a specified condition. Unlike `चक्रम्` loop, `पर्यन्तम्` loop only requires condition expression.

For example, here is a for loop that `वद्` all of the numbers ० to ९

```vedic
# This will print १ to ५
मान अ = १;
पर्यन्तम्( अ <= ५)
{
  वद् अ;
  मान अ = अ+ १;
}
```

**Output:**

```bash
१
२
३
४
५
```

> you can also use **विराम्** keyword to stop the पर्यन्तम् loop same as चक्रम् loop