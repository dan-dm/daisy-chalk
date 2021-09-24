import { Daisy } from './daisy.js';
import chalk from "chalk";

describe('Test test:', ()=> {

    test('1 + 1 = 2', () => {
        expect(1 + 1).toBe(2);
    })

    test('Daisy(4) should be yellow(loves me)', () => {
        expect(Daisy(4)).toBe(chalk.yellow('loves me'));   // chalk works
    })
})