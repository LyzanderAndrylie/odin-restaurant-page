import MyElement from './MyElement';
import { htmlToElement } from '../utils';
import OdinRestaurant from '../assets/images/odin-restaurant.jpg';

export default class HomeContent implements MyElement {
  toElement(): Element {
    const htmlStr = `
    <div class="mx-auto w-[80vw] rounded-xl border border-slate-200 p-4">
        <h1 class="mb-2 text-center font-norse-bold text-3xl font-bold">
          Welcome to The Odin Restaurant: A Culinary Journey to the Gods
        </h1>
        <div
          class="mb-4 flex flex-wrap-reverse content-center justify-center gap-4 p-2"
        >
          <p
            class="flex min-w-[300px] max-w-[640px] flex-1 items-center justify-center p-2 text-center"
          >
            Step into a realm where gastronomy meets mythology - welcome to The
            Odin Restaurant, where every dish is an ode to the epic tales of
            Odin, the Allfather of Norse mythology. Immerse yourself in a dining
            experience that transcends time, where the ancient legends of gods
            and warriors come alive through the artistry of our culinary
            creations.
          </p>
          <div class="flex-2 flex items-center justify-center">
            <img
              class="aspect-video object-cover"
              src="${OdinRestaurant}"
              alt=""
            />
          </div>
        </div>
        <hr class="mb-4" />
        <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
          A Feast Worthy of Valhalla
        </h2>
        <p class="mb-4 p-2 text-center">
          Whether you're a scholar of Norse lore, a seeker of exceptional
          flavors, or simply someone in search of a unique dining experience,
          The Odin Restaurant welcomes you. Come and indulge in a feast worthy
          of Valhalla itself, where every dish is a tribute to the gods and an
          exploration of the senses.
        </p>
        <hr class="mb-4" />
        <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
          Book Your Mythic Culinary Journey
        </h2>
        <p class="mb-6 p-2 text-center">
          Ready to embark on a gastronomic adventure like no other? Reserve your
          table at The Odin Restaurant and prepare to be transported to a realm
          of culinary enchantment. Odin's legacy lives on through our dishes,
          and we invite you to partake in the magic.
        </p>
        <div class="text-center">
          <button
            class="w-80 rounded-xl bg-tussock-500 p-4 font-bold text-white hover:bg-tussock-600 active:bg-tussock-700"
          >
            Reserve Your Table
          </button>
        </div>
    </div>`;

    return htmlToElement(htmlStr);
  }
}
