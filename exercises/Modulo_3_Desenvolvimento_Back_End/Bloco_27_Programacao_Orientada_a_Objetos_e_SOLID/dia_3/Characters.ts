interface Character {
  name: string;
  specialMove: string;
}

interface IModel {
  update(): void;
  delete(): void;
  create(): DbCharacter;
  get(): DbCharacter[];
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

class LocalDbModel implements IModel {
  constructor(public arrayOfCharacter: DbCharacter[]) {};

  update(character: DbCharacter) {
    const newCharacter = db.find((item) => item.id === character.id);
  }
}