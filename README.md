SharePlus Launchpad Development
===============================

Developing SharePlus Launchpads comes with a unique set of challenges. Developers writing web applications rely on their browser dev tools (F12 in most browsers) to quickly visualize and debug their code on their desktop. Launchpads however, run within the iOS web control which may not render exactly the same as a desktop Safari browser. Another constraint is that JavaScript code using the SharePlus API is only available within the SharePlus app. This means that you�ll need to do your iterative testing and debugging remotely on your iOS device, packaging and uploading a new Launchpad to SharePoint every time a change is made which can quickly become tedious. Fortunately, with the right toolset this process can be made easier. 

Since it�s easiest to do your layout and styling on the desktop, we�ll start there on our first iteration. [Ripple�s Chrome extension](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc) allows you to choose your window size from a list of device presets (iPad, iPhone5, etc.) and automatically set your browser to it when developing Launchpads. As a first pass it�s not bad but not perfect. You�ll need to account for the fact that the Launchpad title take up screen real estate and that the pinned side menu takes up additional space.

Keep in mind that for the iPad, you�ll need to develop for 4 different screen configurations � landscape at 2048 x 1408, landscape with the side menu pinned at 1608 x 1408, portrait at 1536 x 1919 and portrait with the side menu pinned at 1095 x 1919. All the major browser dev tools allow you to select a custom resolution which will get you close to what will appear in the Launchpad.

