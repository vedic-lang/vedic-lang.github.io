---
sort: 12
---
## विधि (class)

>_transliteration: vidhi, meaning: Set of instruction_

>_transliteration: sandhi, meaning: Treaty_


In Vedic, a class is defined using the विधि keyword.
A class can have its own में (methods) defined within it.

For example:

```ved
विधि सौरमंडल {
  सौरमंडल_में() {
    वद("सौरमंडल में");
  }
}

विधि पृथ्वी सन्धि सौरमंडल {
  पृथ्वी_में() {
    वद("पृथ्वी में");
  }
}

विधि एशिया सन्धि पृथ्वी {
  एशिया_में() {
    वद("एशिया में");
  }
}

मान एशिया_वस्तु = एशिया();
एशिया_वस्तु.सौरमंडल_में();
एशिया_वस्तु.पृथ्वी_में();
एशिया_वस्तु.एशिया_में();
```

**output**

```bash
सौरमंडल में
पृथ्वी में
एशिया में
```

in this example, we define three classes: सौरमंडल (Sauramandal), पृथ्वी (Prithvi), and एशिया (Asia).

- सौरमंडल has one पद्धति (method) called सौरमंडल_में (Sauramandal_mein).
पृथ्वी is a subclass of सौरमंडल and has its own में called पृथ्वी_में (Prithvi_mein).
- एशिया is a subclass of पृथ्वी and has its own में called एशिया_में (Asia_mein).
- We then create an एशिया object एशिया_वस्तु and call the मेंs (methods) on it. The output will be displayed in the console.