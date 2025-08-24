class Q17_Logger {
  private static _instance: Q17_Logger | null = null;
  private constructor() {}
  static get instance(): Q17_Logger {
    if (!this._instance) this._instance = new Q17_Logger();
    return this._instance;
  }
  log(message: string): void { console.log(`[LOG] ${message}`); }
}

// Demo
(() => {
  const logger = Q17_Logger.instance;
  logger.log("Singleton works");
})();
