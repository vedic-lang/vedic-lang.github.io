---
sort: 13
---
## अवहन् (import)

> _transliteration: AvAhana, meaning: invite_

In vedic we have a built-in **अवहन्** `(Import)` method to include **विधि** `(modules)` that exist in separate files. The **अवहन्** keyword is followed by a string which contains the path to the `.ved` or `.v` file to be imported. The file paths should be realtive path to file which is calling that file.

### Example

**Filename** : simpleinterest.ved

```vedic
# simple interest calc विधि
सूत्र मिश्रधन(म,द,स){
  फल म+(म*द*स/१००);
}
```
**Filename** : main.ved

```vedic
अवहन् "./simpleinterest.ved";

मान मूलधन = १०००;
मान दर = ८;
मान समय = ५; 

वद् "मिश्रधन = "+मिश्रधन(मूलधन,दर,समय);
```

**OUTPUT** : 

```bash
मिश्रधन = १४००
```