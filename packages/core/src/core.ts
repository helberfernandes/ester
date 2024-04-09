#! /usr/bin/env node

import EsterController from './controller';

(async () => {
  const controller = new EsterController();

  controller.getProgram().parse(process.argv);

  controller.run();
})();
