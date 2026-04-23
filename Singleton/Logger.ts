class Logger {
    private static instance: Logger | undefined;
    private constructor() { }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance ;
    }
}

