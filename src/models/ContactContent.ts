import MyElement from './MyElement';
import { htmlToElement } from '../utils';
import MapMarkerIcon from '../assets/icons/map-marker.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import EmailIcon from '../assets/icons/email-outline.svg';
import ReservationIcon from '../assets/icons/clipboard-text-clock.svg';

export default class ContactContent implements MyElement {
  toElement(): Element {
    const htmlStr = `
      <div class="mx-auto w-[80vw] rounded-xl border border-slate-200 p-4">
      <h1 class="mb-4 text-center font-norse-bold text-3xl font-bold">
        Contact Us
      </h1>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        <div>
          <div class="flex items-center justify-center">
            <img class="block w-32" src="${MapMarkerIcon}" alt="" />
          </div>
          <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
            Address
          </h2>
          <p class="p-2 text-center">
            Bifröst Avenue, Asgardia Realm of The Odin Restaurant
          </p>
        </div>
        <div>
          <div class="flex items-center justify-center">
            <img class="block w-32" src="${PhoneIcon}" alt="" />
          </div>
          <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
            Phone
          </h2>
          <p class="p-2 text-center">Valhalla Line: +1-123-456-7890</p>
        </div>
        <div>
          <div class="flex items-center justify-center">
            <img class="block w-32" src="${EmailIcon}" alt="" />
          </div>
          <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
            Email
          </h2>
          <p class="p-2 text-center">info@odin.com</p>
        </div>
        <div>
          <div class="flex items-center justify-center">
            <img class="block w-32" src="${ReservationIcon}" alt="" />
          </div>
          <h2 class="mb-2 text-center font-norse-bold text-2xl font-bold">
            Reservations
          </h2>
          <p class="p-2 text-center">
            Book your table online or call our Valhalla Line.
          </p>
        </div>
      </div>
    </div>
    `;

    return htmlToElement(htmlStr);
  }
}
