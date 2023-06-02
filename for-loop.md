---
sort: 9
---
## चक्रम् (for loop)

>_transliteration: chakram, meaning: round-loop_

चक्रम् loops are a great way to run code a certain or changing amount of ways in a concise manner. चक्रम् takes in 3 parameters initial value, and condition, and a step size.

For example, here is a for loop that `वद` all of the numbers ० to ९

```vedic
# This will print ० to ९
चक्रम्(मान अ = ०; अ < १०; मान  अ = अ+ १)
{
  वद  "अ = "+अ;
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

### Bonus tip:

you can stop the चक्रम् loop between the process by using the 

**विराम्** (_transliteration: virAm, meaning: stop_) keyword:

```vedic
# This will print only till ५, it will break after अ = ५
चक्रम्(मान अ = ०; अ < १०; मान  अ = अ+ १)
{
  यदि (अ > ५){
    विराम्;
 }
  वद  "अ = " + अ;
}
```

**output**

```bash
अ = ०
अ = १
अ = २
अ = ३
अ = ४
अ = ५
```