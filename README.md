SharePlus Launchpad Development
===============================

Developing SharePlus Launchpads comes with a unique set of challenges. Developers writing web applications rely on their browser dev tools (F12 in most browsers) to quickly visualize and debug their code on their desktop. Launchpads however, run within the iOS web control which may not render exactly the same as a desktop Safari browser. Another constraint is that JavaScript code using the SharePlus API is only available within the SharePlus app. This means that you�ll need to do your iterative testing and debugging remotely on your iOS device, packaging and uploading a new Launchpad to SharePoint every time a change is made which can quickly become tedious. Fortunately, with the right toolset this process can be made easier. 

Since it�s easiest to do your layout and styling on the desktop, we�ll start there on our first iteration. [Ripple�s Chrome extension](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc) allows you to choose your window size from a list of device presets (iPad, iPhone5, etc.) and automatically set your browser to it when developing Launchpads. As a first pass it�s not bad but not perfect. You�ll need to account for the fact that the Launchpad title take up screen real estate and that the pinned side menu takes up additional space.

Keep in mind that for the iPad, you�ll need to develop for 4 different screen configurations � landscape at 2048 x 1408, landscape with the side menu pinned at 1608 x 1408, portrait at 1536 x 1919 and portrait with the side menu pinned at 1095 x 1919. All the major browser dev tools allow you to select a custom resolution which will get you close to what will appear in the Launchpad.

Once we've gotten our divs laid out so that they're roughly where they should be with dummy data, it's time to get them pixel perfect with real data using the SPlus API. For that, we'll need to get our Launchpad onto an iOS device. This requires the folders containing to be zipped up, given a .web.zip extension, and uploaded to SharePoint or DropBox. At this point our development flow is iterative (make a small change and test, make another small change and test again) so repetetive tasks like packaging a Launchpad quickly add up.

[Gulp](http://gulpjs.com/) is perfect for automating away these annoyances and let you focus on coding. If you run the watch task with the gulpfile found in this directory, it will create a new distributable file every time you save your code. In the future, I hope to have it push to SharePoint as well, but for now that'll be the only repetitive step you'll need to do. 

Now you're ready to debug your Launchpad on a phone or tablet. To finish up the styling to pixel perfection you'll need [Weinre](http://people.apache.org/~pmuellr/weinre-docs/latest/). Like Gulp, Weinre is a node.js tool and you'll find [installation](http://people.apache.org/~pmuellr/weinre-docs/latest/Installing.html) and [usage](http://people.apache.org/~pmuellr/weinre-docs/latest/Running.html) instruction on their website. Once it's installed (_npm -g install weinre_) you'll need to add this to your HTML file: 
```HTML
<script src="http://YOUR.IP.ADDRESS.HERE:8080/target/target-script-min.js"></script>
```
At a console command prompt type: `weinre --boundHost=-all- --readTimeout=600` and navigate your browser to `localhost:8080/client`.

