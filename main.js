//array of drivers (12 in total)
const driverList = ['Hamilton', 'Checo', 'Verstappen', 'Alonso', 'Norris', 'Riccardo', 'Vettel', 'Russell', 'Stroll', 'Schumacher', 'Gasly', 'Latifi']
//array of locationactions (4 in total)
const locationActions = ['once went to',
                        'once drove in',
                        'once won through',
                        'once got pole in'];
//array of locations (12 in total)
const locationList = ['Yas Marina Circuit',
                    'Suzuka International Racing Course',
                    'Silverstone Circuit',
                    'Shanghai International Circuit',
                    'Red Bull Racing',
                    'Miami International Autodrome',
                    'Jeddah Corniche Circuit',
                    'Hungaroring',
                    'Circuit Zandvoort',
                    'Circuit Of The Americas',
                    'Circuit de Spa-Francorchamps',
                    'Circuit de Monaco'];
//array of verbs (12 in total)
const verbList = ['bonked',
                'ate cake with',
                'received extremely poor-quality present from',
                'gave an unwanted sensual massage to',
                'invented Reddit with',
                'very ineffectually punched',
                'pretended to be',
                'ran away from a murderous horde with',
                'played League Of Legends with',
                'roundly insulted',
                'mauled',
                'played tag with'];
//array of other people (12 in total)
const otherPersonList = ['Lebron James',
                        "Heavy from TF2",
                        'Bruce Dropemoff',
                        'the Roman Emperor',
                        "veigar",
                        'Mokey D Luffy',
                        'a human statue',
                        "the period's greatest panda tickler",
                        'the entire nation of Canada',
                        'Albert Einstien',
                        'Kai Cenat',
                        "the first person ever to say 'Wazaaap'"];


//start of function to create random text
function driverFacts() {
    //create a random number based on the input array
    function getRandNum(array){
        return Math.floor(Math.random() * array.length);
    }

    //choosing random indexes from the different arrays
    let driver = driverList[getRandNum(driverList)];
    let locationVerb = locationActions[getRandNum(locationActions)];
    let location = locationList[getRandNum(locationList)];
    let verb = verbList[getRandNum(verbList)];
    let otherPerson = otherPersonList[getRandNum(otherPersonList)];

    //putting it all together!
    let fullString = `${driver} ${locationVerb} ${location} and ${verb} ${otherPerson}`;
    console.log("Did you know:")
    console.log(fullString + "?");
};

driverFacts();
