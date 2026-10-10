import * as migration_20261010_212819_initial from './20261010_212819_initial';
import * as migration_20261010_213839_menu_settings from './20261010_213839_menu_settings';

export const migrations = [
  {
    up: migration_20261010_212819_initial.up,
    down: migration_20261010_212819_initial.down,
    name: '20261010_212819_initial',
  },
  {
    up: migration_20261010_213839_menu_settings.up,
    down: migration_20261010_213839_menu_settings.down,
    name: '20261010_213839_menu_settings'
  },
];
