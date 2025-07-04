---
sort: 6
---
## कारक (operator)

>_transliteration: kAraka, meaning: operator_

कारक are very useful for manipulating values

there are basically 4 type of कारक currently in vedic:

- बूलीयकारक (bUlIyakAraka - Boolean Operator)
- तार्किककारक (tArkikakAraka - Logical Operator)
- गणितकारक (gaNitakAraka - Arithmetic Operator)
- आन्वयिककारक (AnvayikakAraka - Relational Operator)

कारक in vedic include:

|Operator|Name|English Name|
|---|---|---|
| + | धन (dhana) | plus |
| - | ऋण (RNa) | minus |
| * | गुणा (guNa) | multiply |
| / | भाग (bhAga) | divide |
| % | शेष (seSa) | remainder |	
| > | महत्तर (mahattara) | greater than |
| < | लघुत्तर (laghuttar) | less than |
| == | समान (samAna) | equal to |
| != | असमान (asamAna) | not equal to |
| >= | महत्तर वा समान | greater than or equal to |
| <= | लघुत्तर वा समान | less than or equal to |
| && | च (cA) | and |
| \|\| | वा (vA) | or |
| ! | न (nA) |	not |


Example :

```ved
वद(२+१); # ३
वद(२-१); # १
वद(२*१); # २
वद(२/१); # २
वद(२%१); # ०
वद(२>१); # सत्य
वद(२<१); # असत्य
वद(२==१); # असत्य
वद(२!=१); # सत्य
वद(२>=१); # सत्य
वद(२>=१); # सत्य
वद(२<=१); # असत्य
वद(२&&१); # सत्य
वद(२||१); # सत्य
```
