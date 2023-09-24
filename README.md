# smartrobe

> reduce your closet and finally have something to wear!

Fashion is one of the biggest markets in the world. "Up to 100 billion garments are produced by the fashion industry every year, each year, as much as 92 million tons of clothing ends up in landfills" (source: https://theroundup.org/textile-waste-statistics/). \
Although this leads to an unbearable amount of waste, resourc usage and toxic emissions, clothing companies still create new collections of clothes in huge quantities - with the latest trend of ultra fast fashion - convincing people that they need them. \
Meanwhile, our own closets are already packed with "must have’s" from previous seasons, many of them rarely worn.. what makes us part of the problem and responsible to act.

smartrobe aims to cut mindless consumption of clothing by analysing your closet. Join us and finally have a smart wardrobe with only the things that you really love and need!

Create a digital twin of your current closet by adding all of your clothes with corresponding details in the app. Each time you wear a piece, mark it as worn. Over time you'll gain insights into your favorite pieces and outfits, cost-per-use and what probably to get rid of. \Buy less (often useless and incompatible) new clothes, safe time, space and money and make your wardrobe a smartrobe. 

# Setup
The project can be run native or via a containerised docker version.
Docker has to be installed seperately, to build the project change path into the project folder and run

```bash
  docker compose up -d --build
```

to build the container with all required packages (only necessary once).

To start the container enter

```bash
  docker compose up
```

## Usage and examples

Coding is not necessary in order to use the app! \
After starting the container, the application can accessed from withing a browser at http://localhost:5173 \
Addtionaly some functionality is also available through RestAPI (see http://localhost:8080/docs for detailed information)

**insert pictures for detailled usage here**
  
## Roadmap

- Additional browser support
- Add more integrations

  
## Authors

- [@Paulina Daciuk](https://github.com/daciukpaulina)
- [@Ayşe Nur](https://github.com/aysiscim)
- [@Erik Ruslanov](https://github.com/0kcalf)
- [@Marlena Stojakovic](https://github.com/Stojakovic1)
- [@Jannik Nahrgang](https://github.com/thejaniak)
- [@Ayman Soultana](https://github.com/Hydropic)

# TODO for the Techies
Please **fill out the following information below**, as soon as possible. It is **required** to have this file completely filled out and up to date at the end of the project phase.
You can of course use this file to manage your project, e.g. as a place to keep your todos and to plan your features. Also, feel free to edit this readme in any kind of way you like, but the required base layout and information should be consistent throughout all techie projects.

**Hint:** The following file is written in `markdown` which is a language to format text with simple characters. If you are unsure on how to use markdown then have a look at [this guide](https://www.markdownguide.org/basic-syntax/)

By the end you should have filled out the following:
1. **Project Title:** The title of the project, including a description which states the motivation/problem of the project and the developed solution.
2. **How to Setup and Run:** The respective commands to install and run the project
3. **Examples:** A brief overview on how to use the main functionalities of your project. This does not have to be code but can also be screenshots or a video.
4. **Roadmap:** The general outline of what you want to do in what order. Please keep this up to date, so that we can follow what you are and will be doing.
5. **Authors:** Please add all of you and link your respective GitHub profile and other information if you want to. This part if completely up to you.
6. If you are done filling out the information below, please **delete this TODO Section** to keep your project readme clean for other people to get to know more about your project.
