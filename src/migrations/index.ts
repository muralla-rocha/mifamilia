import * as migration_20261010_212819_initial from './20261010_212819_initial';

export const migrations = [
  {
    up: migration_20261010_212819_initial.up,
    down: migration_20261010_212819_initial.down,
    name: '20261010_212819_initial'
  },
];
