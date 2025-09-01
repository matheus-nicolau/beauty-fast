export abstract class Entity {
  protected createdAt: Date;
  protected updateAt: Date;

  protected constructor(createdAt: Date, updatedAt: Date) {
    this.createdAt = createdAt;
    this.updateAt = updatedAt;
  }

  protected abstract validate(): void;

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updateAt;
  }

  protected hasUpdated() {
    this.updateAt = new Date();
  }
}
