import * as migration_20261010_212819_initial from './20261010_212819_initial';
import * as migration_20261010_213839_menu_settings from './20261010_213839_menu_settings';
import * as migration_20261010_232741_contact_messages from './20261010_232741_contact_messages';

export const migrations = [
  {
    up: migration_20261010_212819_initial.up,
    down: migration_20261010_212819_initial.down,
    name: '20261010_212819_initial',
  },
  {
    up: migration_20261010_213839_menu_settings.up,
    down: migration_20261010_213839_menu_settings.down,
    name: '20261010_213839_menu_settings',
  },
  {
    up: migration_20261010_232741_contact_messages.up,
    down: migration_20261010_232741_contact_messages.down,
    name: '20261010_232741_contact_messages'
  },
];
