import { find } from 'domassist';
import foo from './lib/foo';

class Test {
  constructor() {
    console.log('test');
  }

  type() {
    console.log(typeof find);
  }
}

class Do extends Test {
  constructor() {
    super();

    this.echo();
  }

  echo(message = 'something') {
    console.log(message);
    foo(this.echo);
  }
}

export default Do;
