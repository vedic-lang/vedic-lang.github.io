---
sort: 9
---

## चक्रम् (for loop)

> _transliteration: chakram, meaning: round-loop_

चक्रम् loops are a great way to run code a certain or changing amount of ways in a concise manner. चक्रम् takes in 3 parameters initial value, and condition, and a step size.

For example, here is a for loop that `वद` all of the numbers ० to ९

```vedic
# This will print ० to ९
चक्र(मान अ = ०; अ < १०; अ = अ+ १)
{
  # चक्रम् takes in 3 parameters initial value, and condition, and a step size
  वद("अ =",अ);
}
```

This ends up outputting

```bash
अ = ०
अ = १
अ = २
अ = ३
अ = ४
अ = ५
अ = ६
अ = ७
अ = ८
अ = ९
```

### Viram:

you can stop the चक्रम् loop between the process by using the

**विराम** (_transliteration: virAm, meaning: stop_) keyword:

```vedic
# This will print only till ५, it will break after अ = ५
चक्र(मान अ = ०; अ < १०; अ = अ+ १){
    यदि (अ >= ५){
        विराम;  # viram is like break
    }
    वद("अ =>",अ);
}
```

**output**

```bash
अ = ०
अ = १
अ = २
अ = ३
अ = ४
```

### Agrim:

you can skip the चक्रम् loop between the process by using the

**अग्रिम** (_transliteration: AgrIm, meaning: skip_) keyword:

```vedic
# This will print only till ५, it will skip after अ = २
चक्र(मान अ = ०; अ < ५; अ = अ+ १){
    यदि (अ == २){
        अग्रिम; # Agrim is like continue
    }
    वद("अ =>",अ);
}
```

**output**

```bash
अ = ०
अ = १
अ = ३
अ = ४
```
