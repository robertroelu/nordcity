//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';
import { cmssort } from '@finsweet/attributes-cmssort/';
import { cmsload } from '@finsweet/attributes-cmsload/';
import { cmsfilter } from '@finsweet/attributes-cmsfilter/';
import { scrolldisable } from '@finsweet/attributes-scrolldisable';

//Modal
import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { swipersBuildings } from '$utils/swipersBuildings';
import { textAnimations } from '$utils/text-animations';
import { languageSwitcher } from '$utils/language-switcher';
import { blog } from '$utils/blog';

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  linkblockedit();
  cmssort();
  cmsload();
  cmsfilter();
  scrolldisable();
  // modal();
  swipers();
  swipersBuildings();
  textAnimations();
  languageSwitcher();
  blog();
});
