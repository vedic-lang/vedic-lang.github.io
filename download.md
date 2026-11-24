---
sort: 1
---

## For Linux and macOS

### Using Homebrew:

```bash
brew install vedic
```

### Using Shell:

**Install Vedic on your system with just one command.**

Open your terminal and run the following command:

```bash
curl -fsSL https://vedic-lang.github.io/install/install.sh | bash
```

This command will download and execute the Vedic installation script, automatically setting up Vedic on your system.

### Install with APT on Debian and Ubuntu

On Debian 13 or Ubuntu 24.04 for amd64 (64-bit Intel or AMD), add the Vedic repository and install the CLI. The source file includes the key APT uses to verify updates.

```sh
curl -fsSLo vedic.sources https://vedic-lang.github.io/apt/vedic.sources
sudo install -m 0644 vedic.sources /etc/apt/sources.list.d/vedic.sources
sudo apt update
sudo apt install vedic
vedic --version
```

[APT repository and signing information](https://vedic-lang.github.io/apt/)

## For Windows (Using Installer):

Vedic can be installed on Windows by following these steps:

1. Click on the below "Downloads" button or link to start the download.

- <a href="https://github.com/vedic-lang/vedic/releases/latest/download/vedic-win-x86_64-installer.msi">
   <img src="assets/images/win-download-button.png" height="75"/>
   <br>Download Windows [64-bit]
</a>
   
2. Once the download is complete, double-click on the downloaded file to start the installation process.

That's it! You are now ready to use Vedic on your system.

If you encounter any issues during the installation process, please refer to the Vedic documentation or reach out to our support team for assistance.

Happy coding with Vedic!
