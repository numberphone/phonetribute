import { AdvancedSaga } from "./AdvancedSaga";
import { Saga } from "./BaseSaga";
import { SagaHelper } from "../SagaHelper";

export class HirudegarnSaga extends AdvancedSaga implements Saga {
  name: string = '[Movie] Wrath of the Dragon';

  protected hirudegarn: unit | undefined;
  protected matureHirudegarn: unit | undefined;
  
  constructor() {
    super();
    this.sagaDelay = 15;
  }

  spawnSagaUnits(): void {
    super.spawnSagaUnits();
    DisplayTimedTextToForce(
      bj_FORCE_ALL_PLAYERS, 15, 
      "Hoi has unsealed Tapion and reformed the legendary monster Hirudegarn!"
    );

    this.addHeroListToSaga(["Hirudegarn", "Mature Hirudegarn"], true);
    
    this.hirudegarn = this.bosses.get("Hirudegarn");
    this.matureHirudegarn = this.bosses.get("Mature Hirudegarn");

    SagaHelper.sagaHideUnit(this.matureHirudegarn);

    for (const [name, boss] of this.bosses) {
      SetUnitAcquireRange(boss, 99999);
    }

    this.ping();
    this.addActionRewardStats(this);
  }

  update(t: number): void {
    if (
      this.hirudegarn && this.matureHirudegarn && 
      SagaHelper.checkUnitHp(this.hirudegarn, 0.5, false, false, true) &&
      SagaHelper.isUnitSagaHidden(this.matureHirudegarn)
    ) {
      DisplayTimedTextToForce(
        bj_FORCE_ALL_PLAYERS, 15, 
        "|cffffcc00Hoi|r: Hahahaha, how foolish of you - <gets crushed by Mature Hirudegarn>"
      );
      SagaHelper.genericTransformAndPing(this.matureHirudegarn, this.hirudegarn, this);
    }
  }

  canStart(): boolean {
    return true;
  }

  canComplete(): boolean {
    if (this.bosses.size > 0) {
      return SagaHelper.areAllBossesDead(this.bosses);
    }
    return false;
  }

  start(): void {
    super.start();
    this.spawnWhenDelayFinished();
  }

  spawnWhenDelayFinished(): void {
    if (this.sagaDelay <= 0) {
      this.spawnSagaUnits();
    } else {
      TimerStart(this.sagaDelayTimer, this.sagaDelay, false, ()=> {
        this.spawnSagaUnits();
        DestroyTimer(GetExpiredTimer());
      });
    }
  }

  complete(): void {
    super.complete();
  }
}