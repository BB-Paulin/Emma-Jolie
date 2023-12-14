export class Service {
    isDetailsVisible: boolean | undefined;
    constructor(
      public title: string,
      public description: string,
      public duration: number,
      public price: number,
      public before?: string,
      public after?: string,
    ) {}
  }