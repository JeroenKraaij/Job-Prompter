const test = "Hallo Jeroen deze js werkt."
console.log(test)

// opdracht 1a //
console.log('De salesafdeling heeft ' + departments.sales.numberOfEmployees + ' medewerkers');
console.log(`De salesafdeling heeft`)

// opdracht 1b //

console.log('Marketing is een leuke afdeling om te werken. ' + departments.marketing.description);

// opdracht 1c //

console.log('De afdeling Customer Service heeft ' + departments["customer-service"].numberOfEmployees + ' medewerkers.');

// opdracht 1d //

console.log('Sales is een uitdagende afdeling om te werken als Verkoopmanager. ' + departments.sales.jobs[1].description)

// opdracht 2a //
const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

// opdracht 2c //
switch (userInput) {
    case 'marketing':
        console.log(`Je koos ${userInput}. ${departments.marketing.description}`);
        break
    case 'sales':
        console.log(`Je koos ${userInput}. ${departments.sales.description}`);
        break
    case 'customer-service':
        console.log(`Je koos ${userInput}. ${departments["customer-service"].description}`);
        break
    default:
        console.error(`Ongeldige keuze`);
}

