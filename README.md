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
