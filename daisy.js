import chalk from 'chalk';

export function Daisy(num) {

    if (num % 2 == 0) {

        // console.log(chalk.yellow("loves me"))
        return chalk.yellow("loves me");
    } else {

        // console.log(chalk.white("loves me not"))
        return chalk.white("loves me not");
    }
}

