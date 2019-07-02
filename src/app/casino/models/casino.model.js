import { getRandomId } from '../../../../shared/utils/utils';

export class CasinoModel {
  constructor(data) {
    this.id = getRandomId();
    Object.assign(this, data);
  }
}
