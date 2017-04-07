# Shape Shifter

Web extension designed to defeat browser fingerprinting. Spoofs HTTP request headers and javascript API properties.

This is a WIP (work in progress). Until further notice do not rely on this tool as a proper way to evade browser fingerprinting since I have not yet implemented counter actions to all of the known ways that browser fingerprinting can be achieved.

## Installation

Download this project as a zip file or clone this repository:

$ git clone https://github.com/Snapper26/shapeshifter.git

### Firefox
Type "about:debugging" in your address bar.  
Click "Load Temporary Add-on".  
Navigate to the project root directory and choose the manifest.json file.  
Enjoy :)

### Chrome/Chromium

Type "chrome://extensions/" in your address bar.  
Check "Developer Mode".  
Click "Load unpacked extension..."  
Navigate to the project root directory and choose the manifest.json file.
Enjoy :)
