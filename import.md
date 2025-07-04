---
sort: 14
---
## अवहन (import)

> _transliteration: AvAhana, meaning: invite_

In vedic we have a built-in **अवहन** `(Import)` method to include **विधि** `(modules)` that exist in separate files. The **अवहन** keyword is followed by a string which contains the path to the `.ved` file to be imported. The file paths should be relative path to file which is calling that file.

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
अवहन "./simpleinterest.ved";

मान मूलधन = १०००;
मान दर = ८;
मान समय = ५; 

वद "मिश्रधन = "+मिश्रधन(मूलधन,दर,समय);
```

**OUTPUT** : 

```bash
मिश्रधन = १४००
```
