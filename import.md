---
sort: 14
---
## आवाहन (import)

Use `आवाहन` (ITRANS `AvAhana`, “invocation”) to load another Vedic source file. Put the path in double quotes and end the statement with a semicolon. Relative paths start in the directory of the file containing the import.

### Example

Save these two files in the same directory.

**simpleinterest.ved**

```vedic
सूत्र मिश्रधन(म, द, स) {
    फल म + (म * द * स / १००);
}
```

**main.ved**

```vedic
आवाहन "./simpleinterest.ved";

मान मूलधन = १०००;
मान दर = ८;
मान समय = ५;
वद("मिश्रधन =", मिश्रधन(मूलधन, दर, समय));
```

Run `vedic main.ved` with Vedic 3.0 or later. The online IDE currently runs single-file programs.

```text
मिश्रधन = १४००
```

### Import an installed library

The development CLI supports packages from the [Vedic package index](https://github.com/vedic-lang/package-index). With Git on your PATH, run the following command from your project directory once the sample entry is published.

```sh
vedic install ganita
```

Save this program as `main.ved` and run `vedic main.ved`. It prints `४९`.

```vedic
आवाहन "pkg:ganita";
वद(वर्ग(७));
```

The installer looks up the short name in the index and downloads the approved Git commit. It adds an exact version to the nearest `vedic.toml`, or creates one in the current directory. Commit this file with your project.

```toml
[dependencies]
ganita = "2.1.2"
```

Run `vedic install` from another checkout to restore its recorded versions. Installed sources are shared between projects under `~/.vedic/packages` (or `%USERPROFILE%\.vedic\packages` on Windows). Set `VEDIC_INSTALL` to an absolute directory to choose another location. Each project imports the version it declares. Package installation and imports require the native CLI.
