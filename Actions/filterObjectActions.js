const filterObjects = require("../Locators/filterObject")

//define all actions to filter
class filterObjectsPage{
    async dropdownMenuClick(){
        await filterObjects.dropdownMenu.click();
    }
    async filterZtoAClick(){
        await filterObjects.filterZtoA.click();
    }
    
}

//export
module.exports = new filterObjectsPage();