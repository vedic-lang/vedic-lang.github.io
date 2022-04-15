---
sort: 6
---
## कारक (operator)

>_transliteration: kAraka, meaning: operator_

कारक are very useful for manipulating values

there are basically 4 type of कारक currently in vedicscript:

- बूलीयकारक (bUlIyakAraka - Booleanoperator)
- तार्किककारक (tArkikakAraka - logicaloperator)
- गणितकारक (gaNitakAraka - arithmeticoperator)
- आन्वयिककारक (AnvayikakAraka - relationaloperator)

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
| \|\| | वा (vA) | or |Variables (
| ! | न (nA) |	not |


Example :

```ved
वद् २+१; # ३
वद् २-१; # १
वद् २*१; # २
वद् २/१; # २
वद् २%१; # ०
वद् २>१; # सत्य
वद् २<१; # असत्य
वद् २==१; # असत्य
वद् २!=१; # सत्य
वद् २>=१; # सत्य
वद् २>=१; # सत्य
वद् २<=१; # असत्य
वद् २&&१; # सत्य
वद् २||१; # सत्य
```
