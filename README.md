# Blossom

### Web Page
- this is a web page using templates at https://getmdl.io/
- all the components can be find at https://getmdl.io/components/index.html
- note that for some reason google's icon can't be loaded
  - replace them with utf-8 symbols
  - e.g. the three vertical dots can be replaced by https://www.fileformat.info/info/unicode/char/22ee/index.htm
- to avoid using google server, I try to localize most components, which will inevitably cause some bugs.
  - if you inspect the page you will find there will be warnings cuz what i have done
###### suggestions
- make sure everything remain where they are cuz it uses relative path
- to start your own server
  - download nodejs
  - in cmd prompt inputing "node Abosolute\-Path\-Of\-Hello.js" will start your server
  - the address will be "localhost:6868", you can change the port as you wish
    - remember the info you will get from the console may be incorrect cuz it does not dynamically change with the settings
  - to expose your server to School's innner internet, you need to turn off VPN
    - use the band cuz it has a static ip
    - in cmd input "ipconfig" and you will get your ipv-4 address which allows others to visit
    - turn off VPN before you start your server
    - if anything goes wrong, try to run following test on **other** computer
      - whether you can ping your ip
      - whether your server is listening certain port by "telnet ip port"(you may need to enable telnet manually)
    - the other people who visit must using ZJU Wlan or Ether Net
