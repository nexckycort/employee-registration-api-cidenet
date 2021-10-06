// TODO: implementar registro de logs
export const Logger = {
  info: (...args: unknown[]): void => {
    args.forEach((arg) => {
      console.info(arg)
    })
  },
  debug: (...args: unknown[]): void => {
    args.forEach((arg) => {
      console.debug(arg)
    })
  },
  error: (msg: string, e: Error | string | unknown = ''): void => {
    console.error(`⚠️  ${msg} ⚠️ `, e)
  }
}
