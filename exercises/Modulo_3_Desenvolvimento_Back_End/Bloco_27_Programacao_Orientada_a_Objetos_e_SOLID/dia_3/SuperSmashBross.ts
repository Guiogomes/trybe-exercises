abstract class Character {
  constructor(public name: string, public specials: string[]) {}
  abstract talk():void;
  abstract specialMove():void;
}

class MeleeCharacter extends Character {
  talk():void {
    console.log(`${this.name} says: \"I\`m the hero
      ${this.name},  choose me for the win,
      i\`m a melee range character\"`);
  };

  specialMove():void {
    console.log(`${this.name} has move\`s: ${this.specials.toString()}`);
  };
}

class LongRangeCharacter extends Character {
  talk():void {
    console.log(`${this.name} says: \"I\`m the hero
      ${this.name},  choose me for the win,
      i\`m a long range character\"`);
  };

  specialMove():void {
    console.log(`${this.name} has move\`s: ${this.specials.toString()}`);
  };
}

const characterSpecials = (champ: Character) => {
  champ.specialMove();
}

const characterSpeak = (champ: Character) => {
  champ.talk();
}

const character1 = new MeleeCharacter('Ryu', ['hadouken', 'shouryuken', 'tatsumaki seipu kyaku']);
const character2 = new LongRangeCharacter('Peach', ['flower power', 'sleeping']);

characterSpecials(character1);
characterSpecials(character2);
characterSpeak(character1);
characterSpeak(character2);
