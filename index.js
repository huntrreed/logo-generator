const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./Lib/Shapes/shapes');

async function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like on the logo? (Between 1 and 3 characters)',
            validate: function(value) {
                var pass = value.match(/^[A-Za-z]{1,3}$/);
                if (pass) {
                    return true;
                }

                return 'Please enter up to 3 letters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want the text?',
            default: 'black'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which of the following shapes would you like the logo to be?',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the main shape to be?',
            default: 'blue'
        }
    ]);
}
    async function main() {
        try {
            const answers = await promptUser();
    
            let shape;
            switch (answers.shape) {
                case 'Circle':
                    shape = new Circle();
                    break;
                case 'Triangle':
                    shape = new Triangle();
                    break;
                case 'Square':
                    shape = new Square();
                    break;
                default:
                    throw new Error('Invalid shape selected');
            }
    
            shape.setColor(answers.shapeColor);
    
            const svgContent = `
                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${shape.render()}
                    <text x="150" y="125" font-size="20" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
                </svg>
            `;
            
            fs.writeFileSync(path.join(__dirname, 'logo.svg'), svgContent);
            console.log('Generated logo.svg');
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }
        
        main();