# WDI Group Project 2 (Hackathon - Dad Jokes)

![ScreenShot](https://raw.github.com/{username}/{repository}/{branch}/{path} spaces app

In this pair coding Reactathon we are tasked to **build a react application** that consumes a **public API**.

During this project we worked in pairs to implement a fully functioning front end application that pulls in one or more public API's. After initial deliberation, we came to the conclusion that the more API's the better. With this being the first major React project, we wanted to incorporate as much data as possible, but to also ensure the app is fast and fully functioning.

We decided upon the idea to produce a joke generator which would be able to speak or translate the said joke into many different languages and read it out loud


## Getting started


-install dependencies `yarn install`
-Start the server using `yarn start:server`
-Start the client using `yarn start:client`

## Brief

* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app should include a router** - with several "pages".
* **Include wireframes** - that you designed before building the app.
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Be deployed online** and accessible to the public.

## Technologies used

* **JavaScript (ES6)**
* **Axios**
* **HTML 5**
* **React.js**
* **Trello**
* **Node.js**
* **JWT**
* **Bcrypt**
* **Git**
* **Github**
* **Heroku**
* **SCSS**
* **Insomnia**
* **Animate CSS**

-
## Features

- User friendly, fun design. Created to capture an audience.
- Multiple pages to choose which external Restful API the user would like to use to tell a joke.
- Translator app, enabling the joke to be spoken in different languages and accents.



## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## Development

The reactathon dad jokes, was my first project using a Javascript libary and hardly any HTML. We were put into pairs where we brain stormed the best ideas, before the wireframming and planning stage. We came to the conclusion that the more external api's we pulled in, the more accessible our app would be.

![ScreenShot](https://raw.github.com/{username}/{repository}/{branch}/{path} - show screenshot of back end code
![ScreenShot](https://raw.github.com/{username}/{repository}/{branch}/{path}

As this was going to be a fun, interactive app, we acknowledged that the styling would have to be second to none. We used animate css to ensure there would be animation to make the application more compelling to use.

I learnt to play around and learn DRY code. The app was built using React. We have a app main  page containing certain components and a route component that allows you to navigate through certain pages.

For the back button, we needed to take the data from the array we get using axios, slice it and -1 meaning the previous joke would be presented on screen. Below is a snippet of code that handles this function:
```
handleBackButton(){
this.setState({back: this.state.back.slice(0, this.state.back.length-1)}, this.ChangeJokesForBackButton)

}

ChangeJokesForBackButton(){
this.setState({jokes: this.state.back[this.state.back.length-1]})
}
```
We were at this stage, in the early moments of learning React. When it came to rendering the accents onto the page the approach we took was to make a sidebar containing a reference to an element. When clicked, the items would pop up from the side of the page allowing users to choose each. We then had to map through each of the accents we put in state. Then render them onto the page.


```  <div ref={el => this.DivButton = el} className="sidebar">
{this.voices.map(voice => (<div className="sidebar-item" onClick={this.handleChange} key={voice}>{voice}</div>))}
<button onClick={this.handleClick} className="button">Speak</button>
</div>}
```

## Wins and Blockers

The biggest issue we came accross was finding suitable api's that provided us with enough jokes to be able to render. The majority of the joke generator api's consisted of 10-20 jokes which wasnt enough to display.

As at this stage we were still beginners learning React. But we were taught Linking, Routing and how to  pass state down to props. I believe the general layout of components was structured in DRY code manner. We also  went the extra mile with time remaining to  refactor unused code.

CSS animate was a nice introduction to this project. It allowed us to quickly add features that tells a user to do something. For example in each of the joke pages, we added animation to the choose accent button, which adds a class to the referenced div element and shows it. CSS animate saved us a huge amount of time styling.


## Bugs

Below is a list of some of the known bugs within the app:

* We implemented a button to go back a joke, but we never created a home button which takes you  back to the original joke page allowing you to choose a sub page.


## Future Content

Along with any known bugs that need fixing, there are numerous other elements I wish to introduce in the future:

* More routing, now we have the knowledge how to create a backend. We can also give the user the ability to create an account and post a joke for themselves
* Sharing and likes capability. Gives users the chance to up or downvote each joke. At the end of each week, the winner will win a prize
* Password encryption
