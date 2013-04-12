### About slide template

I am use HTML5 slide template from Google I/O 2012. You can find more details from [`this`](https://code.google.com/p/io-2012-slides/).

### Running from a web server

If at some point you should need a web server, use [`serve.sh`](serve.sh). It will
launch a simple one and point your default browser to [`http://localhost:8000/template.html`](http://localhost:8000/template.html):

    $ cd io-2012-slides
    $ ./serve.sh

You can also specify a custom port:

    $ ./serve.sh 8080

### Presenter mode

The slides contain a presenter mode feature (beta) to view + control the slides
from a popup window.

To enable presenter mode, add `presentme=true` to the URL: [http://localhost:8080/index.html?presentme=true](http://localhost:8000/index.html?presentme=true)

To disable presenter mode, hit [http://localhost:8000/template.html?presentme=false](http://localhost:8080/index.html?presentme=false)
