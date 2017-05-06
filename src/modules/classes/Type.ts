export default class Type {
  name: string;
  noDamageFrom: string[];
  halfDamageFrom: string[];
  doubleDamageFrom: string[];
  noDamageTo: string[];
  halfDamageTo: string[];
  doubleDamageTo: string[];
  generation: string;
  moveDamageClass: string;

  constructor(givenData: IType = {} as IType) {
    if (givenData.id != undefined) {
      this.name = givenData.name;
      this.noDamageFrom = givenData.damage_relations.no_damage_from.map((type) => (type.name));
      this.halfDamageFrom = givenData.damage_relations.half_damage_from.map((type) => (type.name));
      this.doubleDamageFrom = givenData.damage_relations.double_damage_from.map((type) => (type.name));
      this.noDamageTo = givenData.damage_relations.no_damage_to.map((type) => (type.name));
      this.halfDamageTo = givenData.damage_relations.half_damage_to.map((type) => (type.name));
      this.doubleDamageTo = givenData.damage_relations.double_damage_to.map((type) => (type.name));
      this.generation = givenData.generation.name;
      this.moveDamageClass = givenData.move_damage_class.name;
    }
  }
}