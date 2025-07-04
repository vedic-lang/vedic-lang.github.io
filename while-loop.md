---
sort: 10
---

## पर्यन्तम् (while loop)

> _transliteration: Paryantam, meaning: round-loop_

Vedic includes `पर्यन्तम्` loop to execute code repeatedly till it satisfies a specified condition. Unlike `चक्रम्` loop, `पर्यन्तम्` loop only requires condition expression.

For example, here is a for loop that `वद` all of the numbers ० to ९

```vedic
# This will print ० to ५
मान अ = ०;
पर्यन्त( अ <= ५)
{
  वद(अ);
  अ = अ+ १;
}
```

**Output:**

```bash
०
१
२
३
४
५
```

> you can also use **विराम** and **अग्रिम** keyword in पर्यन्तम् also same as चक्रम् loop
