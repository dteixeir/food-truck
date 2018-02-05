import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero-module';
import { FoodTruck } from './foodTruckModule';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      new Hero(11, 'Mr. Nice'),
      new Hero(12, 'Narco'),
      new Hero(13, 'Bombasto'),
      new Hero(14, 'Celeritas'),
      new Hero(15, 'Magneta'),
      new Hero(16, 'RubberMan'),
      new Hero(17, 'Dynama'),
      new Hero(18, 'Dr IQ' ),
      new Hero(19, 'Magma'),
      new Hero(20, 'Tornado')
    ];

    const foodtrucks: FoodTruck[] = [];
    const foodtrucksJson: any[] = [
      {
        id: 11,
        name: 'All Star Café',
        description: 'Owner, John Rust, worked as the broiler chef in a steak house and has taken his meaty specialties on the road.',
        website: 'http://www.all-starcafe.com/'
      },
      {
        id: 12,
        name: 'The Art of Baking',
        description: 'Charlotte’s first mobile bakery operating in a purple food truck.',
        website: 'http://www.bakinginc.com/'
      },
      {
        id: 13,
        name: 'Auto Burger and Fry Guys',
        // tslint:disable-next-line:max-line-length
        description: `These guys grind their burgers every day, along with curing and smoking their own bacon and making their own condiments from fresh, local ingredients.`,
        website: 'http://autoburgerandfryguys.com/'
      },
      {
        id: 14,
        name: 'Bebo’s American Bistro',
        description: 'The intersection where The Man Show meets American Bistro in the South. You’ll see what I mean when you get there.',
        website: ''
      },
      {
        id: 15,
        name: 'Belly Backers',
        description: 'Belly Backer’s serves a variety of foods but specializes in Gaufre Liege waffles.',
        website: 'http://www.bellybackers.com/'
      },
      {
        id: 16,
        name: 'Bleu Barn Bistro',
        // tslint:disable-next-line:max-line-length
        description: 'Chef Tara Diamante and Chef Brenton Ebersold met at Johnson & Wales University  and have created a food truck with a season menu that caters to carnivores, omnivores, vegetarian/vegans and gluten-free folks alike.',
        website: 'http://bleubarnbistro.com/'
      },
      {
        id: 17,
        name: 'Cheese to the Mac',
        description: '',
        website: 'http://www.cheesetothemac.com/'
      }
    ];

    // the name of the array has to match the end point.
    foodtrucksJson.map(x => foodtrucks.push(new FoodTruck(x.id, x.name, x.description, x.website)));


    return { heroes, foodtrucks };
  }
}
