# HOMEWORK 5: MANIPULATING TWITTER DATA WITH FUNCTIONS
> * Due date: Midnight on Wednesday, 10/11 (1 week)
> * Part I: Using Github because no pain, no gain
> * Part II: Homework
> * To submit: See Part III, Step 4

## Preamble
This homework will require some googling. As a software engineer, a lot of what you'll need to do is express what you're TRYING to do, and then read code and documentation in order to achieve it. Remember: StackOverflow and Mozilla Developer Network (MDN) are your friend!

## √ Part I: Setting Up Your GitHub
1. Using the Terminal, navigate to your git repository: `$ cd /path/to/mmart-168-fall2017`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 6: `$ git branch homework06`
5. Checkout your new branch: `$ git checkout homework06`
6. Verify that you are now on the new branch: `$ git branch` (check that your new branch has an asterisk next to it).

## √ PART II: Reading response
i read What is the Future of Front End Web Development?
( https://css-tricks.com/future-front-end-web-development/) by Chris Coyier. The author is pretty quick & loose with terms & concepts that I don't quite grasp yet, definitely geared toward a more advanced audience. So it took me a lot of google rabbithole-ing, reading his previous articles that he references in it (When Does a Project Need React? https://css-tricks.com/project-need-react/) + (Poll Results: “Sites” vs “Apps” https://css-tricks.com/poll-results-sites-vs-apps/), & especially reading the comments, & re-reading the article a bunch of times to drive home certain concepts/terminology. Happy I stuck with it because I now sorta understand a ton of things I had noooo idea about 5 hours ago.


recapping his main points:
• web apps will be expected to do more complex things, even better, & near instantly.
• more web apps replacing native software.
• complex state management recorded in long complex URLs (after the “.com/?…” ).
• death of jQuery (we are adopting development patterns that will be fundamentally incompatible with it).
• more javascript frameworks.
• fundamental html & css will always be important, even with changes in usage.


here’s a bunch of things he (& commenters) mentioned that I wanted to research more:
• ES6+ (semi-recent update to the scripting language & syntax of Javascript, which brought us arrow functions/const/let)
• State Management (all of the interactive things & how they are all configured at any given moment.) (“Websites will be built by thinking of what state needs to be managed, then building the right stores for that state.” — things like: Which navigation item is active;  Whether a button is disabled or not;  The value of an input;  Which accordion sections are expanded;  When an area is loading;  The user that is logged in and the team they belong to;  Whether the thing the user is working on is published, or a draft;  All the comments on an article and the bits and bobs that make them up;  The currently viewed article and all its metadata;  An array of related articles and the metadata for those;  A list of authors;  An an activity log of recent actions a user has taken)
• the main deliverable (the end product that the developers turn in?)
• systems VS pages (bigger complicated database-like webapps? instead of simple pages?)
• Ember, Vue, Svelte (frameworks, — like React & Angular which I have heard of but still need to know much more about too)
• Typescript (apparently a code editor thats maybe better for teams? & ?)
• Sketch (frontend design application for prototyping sites & apps, that I still havent used yet)
• Figma (similar to Sketch, except its a web app instead of a native one. https://www.figma.com/ )
• Slack, Tweetdeck,
• CSS pre-processing,  mixins,  extends,  imports
• Build processes,  code bases,  webpack (tree shaking, code splitting),   code shipping,  payloads,  
• Client Hints
• Webpack
• HMR
• toolchain
• SASS backed Gulp/Grunt system
• WebAssembly


I was really confused by his cheerleading for URLs. maybe because it was one of the only sections that I could completely understand the terminology & all, but I couldnt figure out his bigger point. like, I get it, URLs are fantastic & not going anywhere (personally I was actually just thinking the other day how unnecessary QRcodes are when URLs are simpler & less sketchy). but it didnt really seem worthy of including in a list of the future of front end development without some explanation of how they’ll be used different in the future (like uh, how about emojis in URLs? hmmm thats a bad idea i just had).
however, in the comment section some commenters better fleshed out the idea of how long complex URLs will increasingly be used to bring users back to specific states in a webapp / how URLs update while users interact with webapps.
Which is already being used plenty (I save complex URLs of flight search results paths, & map routes, etc…)



## Part III: JavaScript Homework

Twitter used to have a star to show that users had "favorited" a tweet. They changed it to a heart at some point, but, honestly, it's easier to make a star in Illustrator, so we're making our Twitter with stars.

Hearts and stars aside, this is an important feature of tweets - either the tweet is "liked" or it isn't - and, when it's clicked, that state will switch. It's like a light switch (on/off) or a door (open/closed). We can write a `toggle` function to help us switch between those two states in Javascript, and use CSS to show the user what the current state is.

At the end of this exercise, we should have a clickable star. By default, it's grey. If we click it, it should turn gold. If we click it again, it should go back to grey.

### √ Toggle the Like Button
> Open the following 2 files in Atom:
>  
>  * hw06/index.html
>  * hw06/scripts/toggle.js

Complete the following 2 tasks:

1. Write an arrow function called `toggleLike`. It takes no parameters. `toggleLike` should find the DOM element with the id `like`. Now, write a conditional statement. It should check to see if the classList of the element contains the `active` class. If it does, remove the 'active' class. If it doesn't, add the 'active' class.

> HINT: You will find the [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) documentation very useful for this homework

2. Write an arrow function called `toggle` that takes no parameters. It should find a DOM element with the id `like`. without writing a conditional statement, use the classList to toggle the `active` class.

#### Extra Credit
There's a wonderful world of CSS animations out there. Using only CSS, can you animate the transition of the star element? For example, maybe it could grow before settling back to regular size, or spin when it's clicked. (:


### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework using GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which files you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Complete homework 6'`
3. To "push" your change to up to your github account, type: `$ git push origin <branch-name>`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
