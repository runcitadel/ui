export type Online = {
  manager: boolean;
  middleware: boolean;
  node: boolean;
  lnd: { operational: boolean; unlocked: boolean };
};
