import { Game } from "boardgame.io";

interface FSGameState {
  secret: {
    loot_deck: any[],
    monster_deck: any[],
    tresure_deck: any[],
  },
  loot_deck_count: number,
  monster_deck_count: number,
  treasure_deck_count: number,
  loot_discard: any[],
  monster_discard: any[],
  treasure_discard: any[]
}

const FourSoulsGame: Game<FSGameState> = {
  setup: (ctx, setupData) => {
    return {
      secret: {
        loot_deck: [],
        monster_deck: [],
        tresure_deck: [],
      },
      loot_deck_count: 0,
      monster_deck_count: 0,
      treasure_deck_count: 0,
      loot_discard: [],
      monster_discard: [],
      treasure_discard: []
    }
  }
};

export default FourSoulsGame;