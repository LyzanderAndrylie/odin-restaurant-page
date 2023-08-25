import { htmlToElement } from '../utils';
import MyElement from './MyElement';

export default class MenuContent implements MyElement {
  toElement(): Element {
    const htmlStr = `
    <div class="mx-auto w-[80vw] rounded-xl border border-slate-200 p-4">
        <h1 class="mb-4 text-center font-norse-bold text-3xl font-bold">
          Menu of Legends
        </h1>
        <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
          Appetizers
        </h2>
        <ul class="mb-4 text-center">
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Yggdrasil's Garden Salad</h3>
            <p>
              A bountiful selection of fresh greens, root vegetables, and
              foraged herbs, drizzled with a tangy mead-infused vinaigrette.
            </p>
          </li>
          <li class=" mb-2">
            <h3 class="font-norse-bold text-xl">Mjölnir Bites</h3>
            <p>
              Crispy beer-battered fish bites served with a side of Odin's own
              tartar sauce.
            </p>
          </li>
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Valhalla Bruschetta</h3>
            <p>
              Toasted bread topped with roasted heirloom tomatoes, basil,
              garlic, and a touch of ambrosia-infused olive oil.
            </p>
          </li>
        </ul>
        <hr class="mb-4" />
        <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
          Main Courses
        </h2>
        <ul class="mb-4 text-center">
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Thor's Roast</h3>
            <p>
              A succulent cut of prime beef, marinated with a blend of herbs and
              spices fit for a thunder god, served with roasted root vegetables.
            </p>
          </li>
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Sif's Harvest Feast</h3>
            <p>
              A hearty vegetarian dish featuring a medley of roasted seasonal
              vegetables, drizzled with honey and sprinkled with toasted nuts.
            </p>
          </li>
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Loki's Flame-Grilled Salmon</h3>
            <p>
              A fillet of salmon seasoned with Loki's signature fire-spice rub,
              served with a side of quinoa and sautéed spinach.
            </p>
          </li>
        </ul>

        <hr class="mb-4" />
        <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
          Beverages
        </h2>
        <ul class="mb-4 text-center">
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Asgardian Ale</h3>
            <p>
              Our house-brewed ale, crafted to honor the spirits of the gods,
              with hints of malt, hops, and a touch of magic.
            </p>
          </li>
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Idunn's Elixir</h3>
            <p>
              A refreshing blend of tropical fruits and herbs, an elixir that
              promises vitality and a zest for life.
            </p>
          </li>
          <li class="mb-2">
            <h3 class="font-norse-bold text-xl">Valhalla Sunrise</h3>
            <p>
              A captivating mix of cranberry, orange, and pineapple juices, a
              sunrise captured in a glass.
            </p>
          </li>
        </ul>
      </div>
    `;

    return htmlToElement(htmlStr);
  }
}
