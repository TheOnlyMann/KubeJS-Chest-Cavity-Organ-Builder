onEvent('item.registry', event => {
    function createOrgan(organID,organName,StackSize){
        event.create(`kubejscavity:${organID}`).displayName(organName).maxStackSize(StackSize).group('chestcavity:organs');
    }
    //Create kubejs Organs here
    //enter Id of the item, name of the item, and stack size of the item to get a custom item nested inside kubejscavity namespace. 
    //This DOES NOT make these items into organs automatically, so go to server_scripts to add them to be organs!
    createOrgan('clockwork_heart','Clockwork Heart',1)
})