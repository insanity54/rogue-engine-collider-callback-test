import RapierBody, { RapierCollisionInfo } from '@RE/RogueEngine/rogue-rapier/Components/RapierBody.re';

import * as RE from 'rogue-engine';

@RE.registerComponent
export default class StickyController extends RE.Component {
  
  @RapierBody.require()
  rapierBody: RapierBody;
  isCollided: boolean = false;

  start() {
    this.rapierBody.onCollisionStart = (info: RapierCollisionInfo) => {
      if (!this.isCollided) {
        RE.Debug.log('COLLISION DETECTED!')
        this.rapierBody.type = 1
        this.isCollided = true
      }
    }
  }
}
