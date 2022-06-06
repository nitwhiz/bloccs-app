import { Container, Graphics, Rectangle, Text } from 'pixi.js';
import { Game } from '@bloccs/client';
import { positionRelative } from '../../util/Util';

export default class GameSummaryContainer extends Container {
  private readonly background: Graphics;

  private readonly scoresContainer: Container;

  constructor(private readonly screen: Rectangle) {
    super();

    this.background = new Graphics();
    this.scoresContainer = new Container();

    this.addChild(this.background, this.scoresContainer);

    this.visible = false;
  }

  public update(games: Game[]) {
    this.scoresContainer.removeChildren();

    let prevText = null;

    for (const game of games) {
      const text = new Text(`${game.player.name} ${game.score.score}`, {
        fontFamily: 'Press Start 2P',
        fontSize: 14,
        fill: 0xffffff,
      });

      if (prevText === null) {
        text.position.set(50, 50);
      } else {
        positionRelative(text, prevText, {
          left: 0,
          bottom: 8,
        });
      }

      this.scoresContainer.addChild(text);

      prevText = text;
    }

    this.updateLayout();
  }

  private updateLayout() {
    this.background.clear();

    this.background.beginFill(0x000000, 0.75);
    this.background.drawRect(0, 0, this.screen.width, this.screen.height);

    this.background.position.set(0, 0);

    this.scoresContainer.position.set(
      this.screen.width / 2 - this.scoresContainer.width / 2,
      this.screen.height / 2 - this.scoresContainer.height / 2,
    );
  }
}
